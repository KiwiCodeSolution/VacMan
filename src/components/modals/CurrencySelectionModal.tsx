/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { createPortal } from "react-dom";
import * as Icons from "components/iconsComponents";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { setShowNotification } from "redux/notificationsSlice";
import "animate.css";
import { Form, Formik, Field, FormikHelpers } from "formik";

const modalSettingsRoot = document.querySelector("#modalSettings-root") as HTMLElement;

interface Values {
  value: string;
}

const CurrencySelection = () => {
  const dispatch = useAppDispatch();
  const { message, type } = useAppSelector(state => state.notification);

  const initialValues = {
    value: "",
  };
  function handleFormSubmit(values: Values): void {
    console.log(values);
  }

  function handleSubmit(): void {
    dispatch(setShowNotification(false));
  }

  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="absolute h-full w-full backdrop-blur-xl z-30 rounded-lg animate__animated animate__zoomIn animate__faster top-0">
      <div className="w-80 h-96 bg-bg-light rounded-lg flex justify-between absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 z-30">
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          <Form autoComplete="off">
            <Field type="text" name="value" placeholder="Enter currency" />
          </Form>
        </Formik>
        <span className="mt-12 text-center font-medium text-base text-txt-main">texttexttext</span>
      </div>
      <button>ok</button>
      <button>no</button>
    </div>,
    modalSettingsRoot
  );
};

// eslint-disable-next-line import/prefer-default-export
export default CurrencySelection;
