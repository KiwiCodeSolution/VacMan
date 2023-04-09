import { FieldHookConfig } from "formik";

import CurrencyRadioBtn from "components/forms/currencyRadioBtn";

export type Currency = {
  name: string;
  sign: string;
};

type CurrencyRadioBtnsGroupProps = FieldHookConfig<string> & {
  values: Array<Currency>;
};

const CurrencyRadioBtnsGroup = ({ name, values }: CurrencyRadioBtnsGroupProps) => {
  return (
    <ul className="w-fit flex gap-2">
      {values.map((value: Currency) => (
        <li key={value.name}>
          <CurrencyRadioBtn name={name} btnValue={value} />
        </li>
      ))}
    </ul>
  );
};

export default CurrencyRadioBtnsGroup;
