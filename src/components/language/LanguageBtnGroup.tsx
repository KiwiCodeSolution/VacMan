// import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
// import { updateSettings } from "redux/userOperations";
import { ISettings } from "redux/userSlice";

interface ILanguage {
  shortName: ISettings["lang"];
  name: string;
}
interface IParams {
  newSettings: ISettings;
  setNewSettings: (newSettings: ISettings) => void;
}

const LanguageBtnGroup = ({ newSettings, setNewSettings }: IParams) => {
  // const dispatch = useAppDispatch();
  // const { settings } = useAppSelector(state => state.user);

  const language: ILanguage[] = [
    { shortName: "eng", name: "English" },
    { shortName: "ukr", name: "Ukraine" },
    { shortName: "ru", name: "Russian" },
  ];

  return (
    <ul className="w-fit flex">
      {language.map(el => (
        <li
          key={el.shortName}
          className={`w-16 h-8 p-1.5 flex items-center justify-center
          ${el.shortName === newSettings.lang ? "text-app-orange" : "text-txt-main"}
        font-semibold text-txt-main cursor-pointer transition-all duration-300 
        hover:text-txt-black`}
        >
          <button
            className={`${el.shortName === newSettings.lang && "border-b-2"} `}
            type="button"
            onClick={() => setNewSettings({ ...newSettings, lang: el.shortName })}
          >
            {el.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LanguageBtnGroup;
