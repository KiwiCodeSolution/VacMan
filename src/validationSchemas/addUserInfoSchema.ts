import * as yup from "yup";

const fieldNames: Array<string> = [
  "name",
  "phoneNumber",
  "position",
  "location",
  "instagram",
  "facebook",
  "linkedin",
  "telegram",
];
const schema: { [key: string]: ReturnType<typeof yup.string> } = {};

fieldNames.forEach((fieldName: string) => {
  schema[fieldName] = yup.string().max(30);
});

const addUserInfoSchema = yup.object(schema);

export default addUserInfoSchema;
