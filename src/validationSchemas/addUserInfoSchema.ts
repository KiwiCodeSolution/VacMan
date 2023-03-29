import * as yup from 'yup';

const fieldNames: Array<string> = ['phone', 'position', 'location', 'instagram', 'facebook', 'linkedin', 'telegram'];
const schema: { [key: string]: ReturnType<typeof yup.string> } = {};

fieldNames.forEach((fieldName: string) => {
  schema[fieldName] = yup.string().max(50);
});

const addUserInfoSchema = yup.object(schema);

export default addUserInfoSchema;
