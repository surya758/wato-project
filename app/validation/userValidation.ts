import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required('Required'),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  isChecked: Yup.boolean().required(),
});