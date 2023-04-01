/* eslint-disable jsx-a11y/label-has-associated-control */
import { useField, FieldHookConfig } from "formik";

import { Star } from "components/iconsComponents";
import { useEffect } from "react";

type StarRadioBtnProps = FieldHookConfig<string> & {
  btnId: number;
  hoveredBtnId: number;
  selectedBtnId: number;
  onBtnHover: (id: number) => void;
  onBtnSelect: (id: number) => void;
};

const StarRadioBtn = (props: StarRadioBtnProps) => {
  const [field] = useField(props);

  const { name, value, btnId, hoveredBtnId, selectedBtnId, onBtnHover, onBtnSelect } = props;
  const { value: fieldValue, onChange, onBlur } = field;

  const handleStarRadioBtnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onBtnSelect(btnId);
    onChange(e);
  };

  useEffect(() => {
    if (fieldValue === value) {
      onBtnSelect(btnId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filled = btnId <= hoveredBtnId || btnId <= selectedBtnId;

  return (
    <div onMouseEnter={(): void => onBtnHover(btnId)} onMouseLeave={(): void => onBtnHover(0)}>
      <input
        name={name}
        onChange={handleStarRadioBtnChange}
        onBlur={onBlur}
        type="radio"
        value={value}
        id={name + value}
        checked={fieldValue === value}
        className="sr-only peer"
      />
      <label
        htmlFor={name + value}
        className="block cursor-pointer peer-focus:scale-125 transition-transform ease-in-out duration-300"
      >
        <Star className={`w-10 h-10 ${filled ? "fill-txt-black" : "fill-none"} transition-colors `} />
      </label>
    </div>
  );
};

export default StarRadioBtn;
