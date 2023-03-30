import * as yup from "yup";

const registerSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "passwords should match"),
});

export default registerSchema;
