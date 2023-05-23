/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import { Form, Formik } from "formik";
import { useState } from "react";

import NavHeader from "components/navHeader";
import Loader from "components/ui/loader";
import { IVacancy, useGetVacanciesQuery } from "redux/VacancyQueries";
import ShortNote from "components/notices/ShortNotice";
import { Values } from "components/main";
import * as Icons from "components/iconsComponents";

const Archived = () => {
  const [text, setText] = useState("");

  const initialValues = {
    text: "",
  } as Values;

  const { data: response } = useGetVacanciesQuery();
  const archivedVacancies = response?.data
    ?.filter(vacancy => vacancy.archived === true && vacancy.companyName.toLowerCase().includes(text.toLowerCase()))
    .sort((firstVacancy, secondVacancy) => secondVacancy.actions[0].date - firstVacancy.actions[0].date) as IVacancy[];

  const handleChange = (event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value.toLowerCase());
  };

  const handelFormSubmit = (currentCurrency: Values): void => {
    console.log(currentCurrency);
    setText("");
  };

  return (
    <>
      {!response ? (
        <div className="mt-48">
          <Loader active absolute />
        </div>
      ) : (
        <>
          <NavHeader bg="bg-light" prevAddress="/settings" text="Archive" underlined />
          <Formik initialValues={initialValues} onSubmit={handelFormSubmit} className="h-20 bg-bg-light relative">
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
          {!archivedVacancies || !archivedVacancies.length ? (
            <div className="mt-20 text-2xl text-txt-main text-center">No archived vacancy</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-28 mt-5 items-center gap-4 px-4">
                {archivedVacancies &&
                  archivedVacancies.map(vacancy => <ShortNote key={vacancy._id} shortVacancy={vacancy} />)}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Archived;
