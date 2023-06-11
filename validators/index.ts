import * as Yup from 'yup';

export const referralSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Invalid email format',
    )
    .required('Email is required'),
});
