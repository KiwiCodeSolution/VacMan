import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { updateSettings } from "redux/userOperations";
import { ISettings } from "redux/userSlice";

interface ILanguage {
  shortName: ISettings["lang"];
  name: string;
}

const LanguageBtnGroup = () => {
  const dispatch = useAppDispatch();
  const { settings } = useAppSelector(state => state.user);

  const language: ILanguage[] = [
    { shortName: "eng", name: "English" },
    { shortName: "ukr", name: "Ukraine" },
  ];

  const changeLanguage = (currentLang: ISettings["lang"]) => {
    console.log(currentLang);
    // pop-up return {lang}
    dispatch(updateSettings({ ...settings, lang: currentLang }));
  };

  return (
    <ul className={`w-fit flex gap-${language.length}`}>
      {language.map(el => (
        <li
          key={el.shortName}
          className={`w-20 h-8 p-1.5 flex items-center justify-center
          ${el.shortName === settings.lang ? "text-app-green" : "text-txt-main"}
        font-semibold text-txt-main cursor-pointer transition-all duration-300 
        hover:text-txt-black`}
        >
          <button type="button" onClick={() => changeLanguage(el.shortName)}>
            {el.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LanguageBtnGroup;
