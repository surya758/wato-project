import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required('Required'),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4).max(10).required('Required'),
  isChecked: Yup.boolean().oneOf([true], 'Please agree to the terms').required('Required')
});