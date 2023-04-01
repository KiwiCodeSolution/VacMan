import { useField, FieldHookConfig } from "formik";

const ColorRadioBtn = (props: FieldHookConfig<string>) => {
  const [field] = useField(props);

  const { name, value } = props;
  const { value: fieldValue, onChange, onBlur } = field;

  return (
    <div className="relative">
      <input
        type="radio"
        name={name}
        id={name + value}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        checked={fieldValue === value}
        className="sr-only peer"
      />
      <label
        htmlFor={name + value}
        className="pl-1 pr-2 py-1 flex items-center gap-2 border rounded-3xl text-sm font-bold
         text-txt-black cursor-pointer transition-all duration-300 hover:bg-txt-black hover:text-txt-white 
        peer-focus:scale-110  peer-checked:bg-txt-black peer-checked:text-txt-white "
      >
        <div className={`w-6 h-6  rounded-full bg-app-${value}`} />
        <div className="first-letter:uppercase">{value}</div>
      </label>
    </div>
  );
};

export default ColorRadioBtn;
