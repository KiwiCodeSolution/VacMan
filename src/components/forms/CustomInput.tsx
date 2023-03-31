import { ReactElement, useState } from "react";
import { useField, FieldHookConfig } from "formik";

import { IIconProps, Rubber, Eye } from "components/iconsComponents";

type CustomInputProps = FieldHookConfig<string> & {
  label: string;
  LabelIcon?: (props: IIconProps) => JSX.Element;
};

function CustomInput(props: CustomInputProps): ReactElement {
  const [field, meta, helpers] = useField(props);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const { name, id, placeholder, type, label, LabelIcon } = props;
  const { value, onBlur, onChange } = field;
  const { touched, error } = meta;

  function togglePasswordShow(): void {
    setIsPasswordShown((prevState: boolean): boolean => !prevState);
  }

  function clearField(): void {
    helpers.setValue("", false);
  }

  const isPasswordField = type === "password";
  const hasError = error && touched;

  return (
    <div className="text-txt-main ">
      <label htmlFor={id} className="flex items-center gap-1 text-base ">
        {LabelIcon && <LabelIcon size="16" className="stroke-txt-main" />}
        {label}
      </label>

      <div className="relative w-full h-12">
        <input
          name={name}
          type={isPasswordShown ? "text" : type}
          id={id}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className={`px-4 w-full h-full rounded-md  border ${
            hasError ? "border-app-red" : "border-text-main"
          } bg-txt-white focus:outline-none focus:border-app-blue`}
        />

        {isPasswordField ? (
          <button
            className="absolute bottom-1/2 right-2 translate-y-1/2"
            type="button"
            onClick={(): void => togglePasswordShow()}
            aria-label="show/hide password button"
          >
            <Eye crossed={!isPasswordShown} />
          </button>
        ) : (
          <button
            type="button"
            className="absolute bottom-1/2 right-2 translate-y-1/2"
            onClick={clearField}
            aria-label="clear field button"
          >
            <Rubber />
          </button>
        )}

        {hasError && <p className="absolute left-0 top-full -translate-y-[15%] text-app-red">{error}</p>}
      </div>
    </div>
  );
}

export default CustomInput;
