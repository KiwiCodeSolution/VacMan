import { ReactElement, useState } from 'react';
import { FieldHookConfig } from 'formik';

import StarRadioBtn from 'components/forms/StarRadioBtn';

type StarRadionBtnsGroupProps = FieldHookConfig<string> & {
  values: Array<string>;
};

const StarRadioBtnsGroup = ({ name, values }: StarRadionBtnsGroupProps): ReactElement => {
  const [hoveredBtnId, setHoveredBtnId] = useState(0);
  const [selectedBtnId, setSelectedBtnId] = useState(0);

  return (
    <ul className="flex gap-3">
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
  );
};

export default StarRadioBtnsGroup;
