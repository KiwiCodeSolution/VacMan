// colorRadioBtnsGroup;
import { FieldHookConfig } from "formik";

import { IIconProps } from "components/iconsComponents";
import ColorRadioBtn from "components/forms/ColorRadioBtn";

type ColorRadioBtnsGroupProps = FieldHookConfig<string> & {
  values: Array<string>;
  label?: string;
  LabelIcon?: (props: IIconProps) => JSX.Element;
};

const ColorRadioBtnsGroup = ({ name, values, label, LabelIcon }: ColorRadioBtnsGroupProps) => {
  return (
    <div>
      <div className="flex gap-1 justify-start items-center  text-txt">
        {LabelIcon && <LabelIcon size="16" className="text-txt-main" />}
        {label && <p className="text-base text-txt-main">{label}</p>}
      </div>

      <ul className="w-full p-2 mt-2 flex justify-start gap-3 overflow-x-auto">
        {values.map((value: string) => (
          <li key={name + value}>
            <ColorRadioBtn name={name} value={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorRadioBtnsGroup;
