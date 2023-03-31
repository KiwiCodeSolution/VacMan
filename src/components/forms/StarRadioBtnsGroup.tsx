import { ReactElement, useState } from "react";
import { FieldHookConfig } from "formik";

import StarRadioBtn from "components/forms/StarRadioBtn";
import { IIconProps } from "components/iconsComponents";

type StarRadionBtnsGroupProps = FieldHookConfig<string> & {
  values: Array<string>;
  label?: string;
  LabelIcon?: (props: IIconProps) => JSX.Element;
};

const StarRadioBtnsGroup = ({ name, values, label, LabelIcon }: StarRadionBtnsGroupProps): ReactElement => {
  const [hoveredBtnId, setHoveredBtnId] = useState(0);
  const [selectedBtnId, setSelectedBtnId] = useState(0);

  return (
    <div>
      <div className="flex gap-1 items-center  text-txt">
        {LabelIcon && <LabelIcon className="fill-txt-main" />}
        {label && <p className="text-base text-txt-main">{label}</p>}
      </div>

      <ul className="mt-2 flex justify-center gap-3">
        {values.map((value: string, idx: number) => (
          <li key={name + value}>
            <StarRadioBtn
              name={name}
              value={value}
              btnId={idx + 1}
              hoveredBtnId={hoveredBtnId}
              selectedBtnId={selectedBtnId}
              onBtnHover={(id: number): void => setHoveredBtnId(id)}
              onBtnSelect={(id: number): void => setSelectedBtnId(id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarRadioBtnsGroup;
