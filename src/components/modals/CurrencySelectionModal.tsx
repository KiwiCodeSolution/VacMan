/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { createPortal } from "react-dom";
import * as Icons from "components/iconsComponents";
// import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import countries from "../../data/currencies.json";
import "animate.css";
import { Form, Formik } from "formik";
import { ISettings } from "redux/userSlice";
// import { updateSettings } from "redux/userOperations";
import { useState } from "react";

const modalSettingsRoot = document.querySelector("#modalSettings-root") as HTMLElement;

interface Values {
  text: string;
}

const CurrencySelection = () => {
  //   const dispatch = useAppDispatch();
  //   const { settings } = useAppSelector(state => state.user);
  const [text, setText] = useState("");

  const initialValues = {
    text: "",
  };

  const changeCurrency = (currentCurrency: ISettings["localCurrency"]) => {
    console.log(currentCurrency);
    // dispatch(updateSettings({ ...settings, localCurrency: currentCurrency }));
  };

  const handleChange = e => {
    setText(e.target.value.toLowerCase());
  };

  const resetForm = () => {
    setText("");
  };

  const normalized = text.toLowerCase();
  const filteredCountries = countries.filter(country => country.currency.toLowerCase().includes(normalized));

  return createPortal(
    <div className="absolute h-full w-full backdrop-blur-xl z-30 rounded-lg animate__animated animate__zoomIn animate__faster top-0">
      <div className="w-96 h-[420px] p-3 bg-bg-light rounded-lg absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 z-30 overflow-auto ">
        <Formik initialValues={initialValues} className="h-20 bg-bg-light">
          <Form autoComplete="off" className="flex sticky top-0 items-center w-full">
            <label htmlFor="currency" className="mb-3  w-full">
              <div className="relative">
                <input
                  id="currency"
                  type="text"
                  name="text"
                  value={text}
                  autoComplete="off"
                  onChange={handleChange}
                  placeholder="Enter currency"
                  className="w-full h-8 px-2 py-1 outline-none rounded-lg"
                />
                {text === "" ? (
                  <button type="button" className="absolute top-1 right-2 items-center">
                    <Icons.Search />
                  </button>
                ) : (
                  <button type="button" className="absolute top-1 right-2 items-center" onClick={resetForm}>
                    <Icons.Close />
                  </button>
                )}
              </div>
            </label>
          </Form>
        </Formik>
        <ul className="flex flex-col gap-y-2">
          {!filteredCountries ||
            (filteredCountries.length === 0 && (
              <div className="text-center">
                <p>Sorry, we could not find this currency.</p> <p>Please try again or choose another currency.</p>
              </div>
            ))}
          {filteredCountries &&
            filteredCountries.map(el => (
              <li key={el.id} value={el.letCode} className="flex gap-x-1 justify-between">
                <div className="flex gap-x-1">
                  <img src={el.flag} alt={el.country} className="w-8" /> {el.currency}
                  <span className="font-bold">{el.sign}</span>
                </div>
                <button type="button" onClick={() => changeCurrency(el.letCode)}>
                  <Icons.Checked />
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>,
    modalSettingsRoot
  );
};

// eslint-disable-next-line import/prefer-default-export
export default CurrencySelection;
