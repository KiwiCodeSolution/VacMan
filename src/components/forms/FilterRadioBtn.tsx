import { ReactElement } from "react";
import { useField, FieldHookConfig } from "formik";

// type FilterRadioBtnProps = FieldHookConfig<string> & {};

const FilterRadioBtn = (props: FieldHookConfig<string>): ReactElement => {
  const [field] = useField(props);

  const { name, value } = props;
  const { onChange, onBlur } = field;

  return (
    <div className="flex ">
      <input
        type="radio"
        name={name}
        id={name + value}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="sr-only peer"
      />
      <label
        htmlFor={name + value}
        className="p-1.5 border rounded-3xl text-sm font-bold
         text-txt-black cursor-pointer transition-all duration-300 hover:bg-txt-black hover:text-txt-white 
        peer-focus:scale-110 peer-checked:bg-txt-black peer-checked:text-txt-white "
      >
        {value}
      </label>
    </div>
  );
};

export default FilterRadioBtn;
