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

  // const changeCurrency = (currentCurrency: ISettings["localCurrency"]) => {
  const changeCurrency = (currentCurrency: string) => {
    console.log(currentCurrency);
    onClick();
    // dispatch(updateSettings({ ...settings, localCurrency: currentCurrency }));
  };

  const sortedCountries = countries.sort((firstCountry, secondCountry) =>
    firstCountry.currency.localeCompare(secondCountry.currency)
  );
  const normalized = text.toLowerCase();
  const filteredCountries = sortedCountries.filter(country => country.currency.toLowerCase().includes(normalized));

  const handleChange = (event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value.toLowerCase());
  };

  const handelFormSubmit = (currentCurrency: Values): void => {
    console.log(currentCurrency);
    // dispatch(updateSettings({ ...settings, localCurrency: currentCurrency }));
    setText("");
  };

  return createPortal(
    <div className="absolute h-full w-full backdrop-blur-xl z-30 rounded-lg animate__animated animate__zoomIn animate__faster top-0">
      <div className="w-[320px] h-[430px] p-3 bg-bg-light rounded-lg absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 z-30 overflow-auto flex flex-col justify-between">
        <Formik initialValues={initialValues} onSubmit={handelFormSubmit} className="h-20 bg-bg-light">
          <Form autoComplete="off" className="flex sticky top-0 items-center w-full  bg-bg-light">
            <label htmlFor="currency" className="w-full">
              <div className="relative">
                <input
                  id="currency"
                  type="text"
                  name="text"
                  value={text}
                  autoComplete="off"
                  onChange={handleChange}
                  placeholder="Enter currency"
                  className="w-full h-8 px-2 py-1 outline-none rounded-lg bg-bg-light z-10"
                />
                <hr />
                {text === "" ? (
                  <button type="button" className="absolute top-1 right-2 items-center">
                    <Icons.Search />
                  </button>
                ) : (
                  <button type="button" className="absolute top-1 right-2 items-center" onClick={() => setText("")}>
                    <Icons.Close />
                  </button>
                )}
              </div>
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
          {text !== "" ? (
            filteredCountries.map(el => (
              <li
                key={el.code}
                className="flex gap-x-1 justify-between rounded-xl p-4 shadow-md hover:shadow-xl focus:shadow-xl"
              >
                <div className="flex gap-x-1">
                  <p>{el.currency}</p>
                  <span className="font-bold ml-4">{el.sign}</span>
                </div>
                <button
                  type="button"
                  onClick={() => changeCurrency(el.code)}
                  className="w-6 h-6 rounded-full drop-shadow-md hover:shadow-2xl focus:shadow-2xl hover:scale-110 focus:scale-110 transition-transform duration-300 items-center z-0"
                >
                  <Icons.Checked size={18} className="mx-auto" />
                </button>
              </li>
            ))
          ) : (
            <p className="text-center">Please enter currency.</p>
          )}
        </ul>
        <Button clickFn={onClick}>Close</Button>
      </div>
    </div>,
    modalSettingsRoot
  );
};

// eslint-disable-next-line import/prefer-default-export
export default CurrencySelection;
