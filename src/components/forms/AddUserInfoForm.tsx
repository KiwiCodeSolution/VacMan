import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
// import { InferType } from "yup";

import CustomInput from "components/forms/CustomInput";
import * as icons from "components/iconsComponents";
import Button from "components/ui/button";

// import addUserInfoSchema from "validationSchemas/addUserInfoSchema";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { updateProfile } from "redux/userOperations";

const AddUserInfoForm = ({ setShowModal }: { setShowModal: (prop: boolean) => void }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector(state => state.user);

  const formFields = [
    { name: "name", label: "User name", labelIcon: icons.Person, type: "name" },
    { name: "phoneNumber", label: "Phone number", labelIcon: icons.Phone16, type: "phone" },
    { name: "position", label: "Position", labelIcon: icons.Position, type: "text" },
    { name: "location", label: "Location", labelIcon: icons.Location, type: "text" },
    { name: "instagram", label: "Instagram", labelIcon: icons.Instagram, type: "text" },
    { name: "facebook", label: "Facebook", labelIcon: icons.Facebook, type: "text" },
    { name: "linkedin", label: "LinkedIn", labelIcon: icons.LinkedIn, type: "text" },
    { name: "telegram", label: "Telegram", labelIcon: icons.Telegram, type: "text" },
  ];

  const initialValues = { ...profile };
  type Values = typeof initialValues;
  if (Object.keys(profile).length > 9) {
    // profile has custom data
    const customData = Object.keys(profile).slice(9);

    if (Object.keys(profile).length - 1 > formFields.length) {
      customData.forEach(field =>
        formFields.push({ name: field, label: field, labelIcon: icons.Person, type: "text" })
      );
    }
  }
  const handelFormSubmit = (values: Values): void => {
    // console.log("values: ", { ...profile, ...values });
    dispatch(updateProfile({ ...profile, ...values }));
    navigate("/");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelFormSubmit}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 grow mt-4 pb-6" noValidate>
          <ul className="flex flex-col gap-y-6">
            {formFields.map(({ name, label, labelIcon, type }) => (
              <li key={name}>
                <CustomInput name={name} label={label} LabelIcon={labelIcon} id={name} type={type} />
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Button btnType="button" variant="white" clickFn={() => setShowModal(true)}>
              Set a custom data
            </Button>
          </div>
          <div className="mt-auto mb-24">
            <Button btnType="submit" variant="black">
              SAVE
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddUserInfoForm;
