import LanguageRadioBtn from "components/forms/LanguageRadioBtn";

export type Language = {
  name: string;
};

const LanguageRadioBtnGroup = () => {
  const LANGUAGE = [{ name: "Eng" }, { name: "Ukr" }];
  return (
    <ul className="w-fit flex gap-2">
      {LANGUAGE.map((value: Language) => (
        <li key={value.name}>
          <LanguageRadioBtn name="language" btnValue={value} />
        </li>
      ))}
    </ul>
  );
};

export default LanguageRadioBtnGroup;
