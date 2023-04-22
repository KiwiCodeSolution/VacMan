/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { createPortal } from "react-dom";
import * as Icons from "components/iconsComponents";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import countries from "../../data/currencies.json";
import "animate.css";
import { Form, Formik } from "formik";
import { ISettings } from "redux/userSlice";
import { updateSettings } from "redux/userOperations";
import { useState } from "react";
import Button from "components/ui/button";
import { ICurrency } from "components/notices/ShortNotice";

const modalSettingsRoot = document.querySelector("#modalSettings-root") as HTMLElement;

interface Values {
  text: string;
}

interface ICurrencyProps {
  onClick: () => void;
}

const CurrencySelection = ({ onClick }: ICurrencyProps) => {
  const dispatch = useAppDispatch();
  const { settings } = useAppSelector(state => state.user);
  const [text, setText] = useState("");

  const initialValues = {
    text: "",
  } as Values;

  const changeCurrency = (currentCurrency: ISettings["localCurrency"]) => {
    console.log(currentCurrency);
    onClick();
    dispatch(updateSettings({ ...settings, localCurrency: currentCurrency }));
  };

  const sortedCountries = countries.sort((firstCountry, secondCountry) =>
    firstCountry.currency.localeCompare(secondCountry.currency)
  );
  const normalized = text.toLowerCase();
  const filteredCountries = sortedCountries.filter(country =>
    country.currency.toLowerCase().includes(normalized)
  ) as ICurrency[];

  const handleChange = (event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value.toLowerCase());
  };

  const handelFormSubmit = (currentCurrency: Values): void => {
    console.log(currentCurrency);
    setText("");
  };

  return createPortal(
    <div className="absolute h-full w-full backdrop-blur-xl z-30 rounded-lg animate__animated animate__zoomIn animate__faster top-0">
      <div className="w-[280px] h-[430px] p-3 bg-bg-grey rounded-lg absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 z-30 overflow-auto flex flex-col justify-between">
        <Formik initialValues={initialValues} onSubmit={handelFormSubmit} className="h-20 bg-bg-light relative">
          <Form autoComplete="off" className="flex sticky top-0 left-0 right-0 ">
            <label htmlFor="currency" className="w-full">
              <input
                id="currency"
                type="text"
                name="text"
                value={text}
                autoComplete="off"
                onChange={handleChange}
                placeholder="Enter currency"
                className="w-full h-8 px-2 py-1 outline-none rounded-md border "
              />

              {text === "" ? (
                <button type="button" className="absolute top-1 right-2 items-center">
                  <Icons.Search />
                </button>
              ) : (
                <button type="button" className="absolute top-1 right-2 items-center" onClick={() => setText("")}>
                  <Icons.Close />
                </button>
              )}
            </label>
          </Form>
        </Formik>
        <ul className="flex flex-col gap-y-2 mb-5 mt-3 px-4">
          {!filteredCountries ||
            (filteredCountries.length === 0 && (
              <div className="text-center">
                <p>Sorry, we could not find this currency.</p>
                <p>Please try again later.</p>
              </div>
            ))}
          {filteredCountries.map(el => (
            <li key={el.code} className="shadow-md hover:shadow-xl focus:shadow-xl">
              <div className="flex gap-x-1 justify-between rounded-xl p-2  bg-bg-light">
                <div className="flex gap-x-1">
                  <p>{el.currency}</p>
                  <span className="font-bold ml-4">{el.sign}</span>
                </div>
                <button
                  type="button"
                  onClick={() => changeCurrency(el.code)}
                  className="w-6 h-6 rounded-full drop-shadow-md hover:shadow-2xl focus:shadow-2xl hover:scale-110 focus:scale-110 transition-transform duration-300 items-center"
                >
                  <Icons.Checked size={18} className="mx-auto" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <Button clickFn={onClick} variant="black">
            Close
          </Button>
        </div>
      </div>
    </div>,
    modalSettingsRoot
  );
};

// eslint-disable-next-line import/prefer-default-export
export default CurrencySelection;
