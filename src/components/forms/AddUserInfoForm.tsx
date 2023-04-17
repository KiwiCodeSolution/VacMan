// addUserInfoForm.tsx;
import { useNavigate } from "react-router-dom";
import { Formik, FormikHelpers, FormikProps } from "formik";
// import { InferType } from "yup";

import CustomInput from "components/forms/CustomInput";
import * as icons from "components/iconsComponents";
import Button from "components/ui/button";

// import addUserInfoSchema from "validationSchemas/addUserInfoSchema";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { setProfile } from "redux/userSlice";

// type Values = InferType<typeof addUserInfoSchema>;

// type Fields = {
//   name: string;
//   label: string;
//   labelIcon?: (props: icons.IIconProps) => JSX.Element;
//   type: string;
// };

const formFields = [
  { name: "name", label: "user name", labelIcon: icons.Phone16, type: "name" },
  { name: "phone", label: "Phone number", labelIcon: icons.Phone16, type: "phone" },
  { name: "position", label: "Position", labelIcon: icons.Position, type: "text" },
  { name: "location", label: "Location", labelIcon: icons.Location, type: "text" },
  { name: "instagram", label: "Instagram", labelIcon: icons.Instagram, type: "text" },
  { name: "facebook", label: "Facebook", labelIcon: icons.Facebook, type: "text" },
  { name: "linkedin", label: "LinkedIn", labelIcon: icons.LinkedIn, type: "text" },
  { name: "telegram", label: "Telegram", labelIcon: icons.Telegram, type: "text" },
];

const initialValues = {
  name: "",
  phone: "",
  position: "",
  location: "",
  instagram: "",
  facebook: "",
  linkedin: "",
  telegram: "",
};
type Values = typeof initialValues;

const AddUserInfoForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector(state => state.user);

  const handelFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    // console.log("Form was submitted.");
    // console.log("values: ", values);
    dispatch(setProfile({ ...profile, ...values }));
    resetForm();
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
