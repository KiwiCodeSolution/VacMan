/* eslint-disable no-restricted-globals */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import { Form, Formik } from "formik";
import { useState, useEffect } from "react";

import { useAppDispatch } from "hooks/reduxHooks";
import { IVacancy, useGetVacanciesQuery } from "redux/VacancyQueries";
import { setReminder } from "redux/userSlice";
import * as Icons from "./iconsComponents";
import AddBtn from "./addBtn";
import Loader from "./ui/loader";
import ShortNote from "./notices/ShortNotice";
import Header from "./Header";

export interface Values {
  text: string;
  preventDefault: () => void;
}

export default function Main() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const initialValues = {
    text: "",
  } as Values;

  const { data: response, isLoading, isError } = useGetVacanciesQuery();

  const vacancies = response?.data
    ?.filter(vacancy => vacancy.archived === false && vacancy.companyName.toLowerCase().includes(text.toLowerCase()))
    .sort((firstVacancy, secondVacancy) => secondVacancy.actions[0].date - firstVacancy.actions[0].date) as IVacancy[];
  const isActionsActive = vacancies?.filter(
    vacancy =>
      vacancy.actions[vacancy.actions.length - 1].fulfilled === false &&
      Date.now() - vacancy.actions[vacancy.actions.length - 1].deadline > -86400000
  );
  console.log(isActionsActive);


  useEffect(() => {
    if (isActionsActive?.length) {
      dispatch(setReminder(true));
    } else {
      dispatch(setReminder(false));
    }
  }, [dispatch, isActionsActive?.length]);

  const handleChange = (event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value.toLowerCase());
  };

  const handelFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setText("");
  };

  return (
    <div className="container mx-auto bg-bg-light">
      {isLoading ? (
        <div className="mt-48">
          <Loader active absolute />
        </div>
      ) : isError ? (
        <h2>ERROR</h2>
      ) : (
        <div className="relative">
          <Header />
          <div className="sticky top-20 z-10 px-4">
            <Formik initialValues={initialValues} onSubmit={handelFormSubmit} className="h-20 bg-bg-light">
              <Form autoComplete="off" className="flex sticky top-0 left-0 right-0 mt-2">
                <label htmlFor="company" className="w-full">
                  <input
                    id="company"
                    type="text"
                    name="text"
                    value={text}
                    autoComplete="off"
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full h-8 px-2 py-1 outline-none rounded-md border"
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
          </div>

          {!vacancies || !vacancies.length ? (
            <>
              <div className="flex justify-center mt-24 px-4">
                <Icons.Todos />
              </div>
              <p className="text-center text-txt-main text-xl px-10 pt-8">No vacancies</p>
              <div className="flex justify-end mx-2 fixed bottom-32 right-8">
                <AddBtn />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-28 mt-5 items-center gap-4 px-4">
                {vacancies && vacancies.map(vacancy => <ShortNote key={vacancy._id} shortVacancy={vacancy} />)}
              </div>
              <div className="flex justify-end mx-2 fixed bottom-32 right-8">
                <AddBtn />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
