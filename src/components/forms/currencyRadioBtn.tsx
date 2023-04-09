import { useField, FieldHookConfig } from "formik";

import { Currency } from "components/forms/currencyRadioBtnsGroup";

type CurrencyRadioBtnProps = FieldHookConfig<string> & {
  btnValue: Currency;
};

const CurrencyRadioBtn = (props: CurrencyRadioBtnProps) => {
  const [field] = useField(props);

  const { name, btnValue } = props;
  const { value, onChange, onBlur } = field;

  return (
    <div>
      <input
        type="radio"
        name={name}
        id={btnValue.name}
        value={btnValue.name}
        onChange={onChange}
        onBlur={onBlur}
        checked={btnValue.name === value}
        className="sr-only peer"
      />
      <label
        htmlFor={btnValue.name}
        className="w-12 h-12 p-1.5 flex items-center justify-center border border-txt-main rounded-md
        text-xl font-bold text-txt-main cursor-pointer transition-all duration-300 hover:bg-txt-black 
        hover:text-txt-white peer-focus:scale-110 peer-checked:bg-txt-black peer-checked:text-txt-white "
      >
        {btnValue.sign}
      </label>
    </div>
  );
};

export default CurrencyRadioBtn;
