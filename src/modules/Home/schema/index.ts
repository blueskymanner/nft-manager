import * as Yup from 'yup';
import {
  VALID_REQUIRED_EMAIL,
  VALID_REQUIRED_MESSAGE
} from 'constants/validate';

// -- schemaValidateSignIn-------------------------------------------------
export const schemaValidateContactForm = Yup.object().shape({
  email: Yup.string().required(VALID_REQUIRED_EMAIL),
  message: Yup.string().required(VALID_REQUIRED_MESSAGE)
});
