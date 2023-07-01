import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
// import { InferType } from "yup";

import CustomInput from "components/forms/CustomInput";
import * as icons from "components/iconsComponents";
import Button from "components/ui/button";

// import addUserInfoSchema from "validationSchemas/addUserInfoSchema";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { updateProfile } from "redux/userOperations";
import addUserInfoSchema from "validationSchemas/addUserInfoSchema";

interface IProps {
  setShowModal: (prop: boolean) => void;
  goBackPath?: string;
}

interface IUserInfoFormFields {
  name: string;
  label: string;
  labelIcon: (props: icons.IIconProps) => JSX.Element;
  type: string;
}

const AddUserInfoForm = ({ setShowModal, goBackPath }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    profile: { avatar, ...profile },
  } = useAppSelector(state => state.user);

  // console.log("profile: ", profile);

  const defaultFields: Array<IUserInfoFormFields> = [
    { name: "name", label: "User name", labelIcon: icons.Person, type: "name" },
    { name: "phoneNumber", label: "Phone number", labelIcon: icons.Phone16, type: "phone" },
    { name: "position", label: "Position", labelIcon: icons.Position, type: "text" },
    { name: "location", label: "Location", labelIcon: icons.Location, type: "text" },
    { name: "instagram", label: "Instagram", labelIcon: icons.Instagram, type: "text" },
    { name: "facebook", label: "Facebook", labelIcon: icons.Facebook, type: "text" },
    { name: "linkedin", label: "LinkedIn", labelIcon: icons.LinkedIn, type: "text" },
    { name: "telegram", label: "Telegram", labelIcon: icons.Telegram, type: "text" },
  ];

  const customFields: Array<IUserInfoFormFields> = [];
  const profileFieldNames = Object.keys(profile);

  const initialValues = { ...profile };
  type Values = typeof initialValues;

  profileFieldNames.forEach((profileFieldName: string) => {
    if (!defaultFields.find((defaultField: IUserInfoFormFields) => defaultField.name === profileFieldName)) {
      customFields.push({ name: profileFieldName, label: profileFieldName, labelIcon: icons.Person, type: "text" });
    }
  });

  // if (Object.keys(profile).length > 9) {
  //   // profile has custom data
  //   const customData = Object.keys(profile).slice(9);

  //   if (Object.keys(profile).length - 1 > defaultFields.length) {
  //     customData.forEach(field =>
  //       defaultFields.push({ name: field, label: field, labelIcon: icons.Person, type: "text" })
  //     );
  //   }
  // }

  const handelFormSubmit = async (values: Values): Promise<void> => {
    await dispatch(updateProfile({ ...profile, ...values, avatar }));

    if (goBackPath) {
      navigate(goBackPath);
    } else {
      navigate("/");
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelFormSubmit} validationSchema={addUserInfoSchema}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 grow mt-4 pb-6" noValidate>
          <ul className="flex flex-col gap-y-6">
            {[...defaultFields, ...customFields].map(({ name, label, labelIcon, type }) => (
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
