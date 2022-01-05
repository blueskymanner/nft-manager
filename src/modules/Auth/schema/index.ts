import * as Yup from 'yup';
import {
  VALID_EMAIL_FORMAT,
  VALID_REQUIRED_FIRST_NAME,
  VALID_REQUIRED_LAST_NAME,
  VALID_PASSWORD_FORMAT,
  VALID_PASSWORD_NOT_MATCH,
  VALID_REQUIRED_PASSWORD_CONFIRM,
  VAILD_REG_PASSWORD,
  VALID_MAX_LENGTH,
  VALID_REQUIRED_PASSWORD,
  VALID_REQUIRED_EMAIL
} from 'constants/validate';

// -- schemaValidateSignIn-------------------------------------------------
export const schemaValidateSignIn = Yup.object().shape({
  email: Yup.string().required(VALID_REQUIRED_EMAIL).email(VALID_EMAIL_FORMAT),
  password: Yup.string().required(VALID_REQUIRED_PASSWORD)
});

// -- schemaValidateSignUp-------------------------------------------------
export const schemaValidateSignUp = Yup.object().shape({
  firstName: Yup.string()
    .required(VALID_REQUIRED_FIRST_NAME)
    .max(50, VALID_MAX_LENGTH),
  lastName: Yup.string()
    .required(VALID_REQUIRED_LAST_NAME)
    .max(50, VALID_MAX_LENGTH),
  email: Yup.string()
    .required(VALID_REQUIRED_EMAIL)
    .email(VALID_EMAIL_FORMAT)
    .max(50, VALID_MAX_LENGTH),
  password: Yup.string()
    .required(VALID_REQUIRED_PASSWORD)
    .matches(VAILD_REG_PASSWORD, VALID_PASSWORD_FORMAT)
    .max(50, VALID_MAX_LENGTH),
  passwordConfirm: Yup.string()
    .required(VALID_REQUIRED_PASSWORD_CONFIRM)
    .max(50, VALID_MAX_LENGTH)
    .test('passwords-match', VALID_PASSWORD_NOT_MATCH, function (value) {
      return this.parent.password === value;
    })
});
// -- schemaValidateForgotPassword-------------------------------------------------
export const schemaValidateForgotPassword = Yup.object().shape({
  email: Yup.string()
    .required(VALID_REQUIRED_EMAIL)
    // .email(VALID_EMAIL_FORMAT)
    .max(50, VALID_MAX_LENGTH)
});
