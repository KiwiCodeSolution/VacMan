// import { FC, ReactElement } from "react";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { InferType } from "yup";

import CustomInput from "./CustomInput";
import * as icons from "components/iconsComponents";
import Button from "components/ui/button";

import addUserInfoSchema from "validationSchemas/addUserInfoSchema";
import { IIconProps } from "components/iconsComponents";

type Values = InferType<typeof addUserInfoSchema>;

type Fields = {
  name: string;
  label: string;
  labelIcon?: (props: IIconProps) => JSX.Element;
  type: string;
};

const formFields: Array<Fields> = [
  { name: "phone", label: "Phone number", labelIcon: icons.Phone16, type: "phone" },
  { name: "position", label: "Position", labelIcon: icons.Position, type: "text" },
  { name: "location", label: "Location", labelIcon: icons.Location, type: "text" },
  { name: "instagram", label: "Instagram", labelIcon: icons.Instagram, type: "text" },
  { name: "facebook", label: "Facebook", labelIcon: icons.Facebook, type: "text" },
  { name: "linkedin", label: "LinkedIn", labelIcon: icons.LinkedIn, type: "text" },
  { name: "telegram", label: "Telegram", labelIcon: icons.Telegram, type: "text" },
];

const initialValues: Values = {
  phone: "",
  position: "",
  location: "",
  instagram: "",
  facebook: "",
  linkedin: "",
  telegram: "",
};

const AddUserInfoForm = () => {
  const handelFormSubmit = (values: Values, { resetForm }: FormikHelpers<Values>): void => {
    console.log("Form was submitted.");
    console.log("values: ", values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelFormSubmit} validationSchema={addUserInfoSchema}>
      {({ handleSubmit }: FormikProps<Values>) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 grow mt-14 pb-6" noValidate>
          <ul className="flex flex-col gap-y-6">
            {formFields.map(({ name, label, labelIcon, type }) => (
              <li key={name}>
                <CustomInput name={name} label={label} LabelIcon={labelIcon} id={name} type={type} />
              </li>
            ))}
          </ul>
          <div className="mt-auto">
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
