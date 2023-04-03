// filterRadioBtnsGroup;
import { FieldHookConfig } from "formik";

import { IIconProps } from "components/iconsComponents";
import FilterRadioBtn from "components/forms/FilterRadioBtn";

type FilterRadioBtnsGroupProps = FieldHookConfig<string> & {
  values: Array<string>;
  label?: string;
  LabelIcon?: (props: IIconProps) => JSX.Element;
};

const FilterRadioBtnsGroup = ({ name, values, label, LabelIcon }: FilterRadioBtnsGroupProps) => {
  return (
    <div>
      <div className="flex flex-wrap gap-1 justify-start items-center  text-txt">
        {LabelIcon && <LabelIcon size="16" className="text-txt-main" />}
        {label && <p className="text-base text-txt-main">{label}</p>}
      </div>

      <ul className="mt-2 flex flex-wrap justify-start gap-3">
        {values.map((value: string) => (
          <li key={name + value}>
            <FilterRadioBtn name={name} value={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterRadioBtnsGroup;
