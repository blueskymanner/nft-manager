import * as Yup from 'yup';
import { VAILD_DATE_BETWEEN, VALID_REQUIRED_FIELD } from 'constants/validate';

var defaultValue = new Date().toDateString;

// -- schemaPostCreate-------------------------------------------------
export const schemaPostCreate = Yup.object().shape({
  name: Yup.string().required(VALID_REQUIRED_FIELD),
  image: Yup.string().required(VALID_REQUIRED_FIELD),
  influencer: Yup.number().min(1, VALID_REQUIRED_FIELD),
  description: Yup.string().required(VALID_REQUIRED_FIELD),

  timeStart: Yup.date().typeError(VALID_REQUIRED_FIELD),
  timeEnd: Yup.date()
    .typeError(VALID_REQUIRED_FIELD)
    .min(Yup.ref('timeStart'), VAILD_DATE_BETWEEN),

  price: Yup.number().min(1, VALID_REQUIRED_FIELD),
  paymentMethod: Yup.string().required(VALID_REQUIRED_FIELD),
  walletQuantity: Yup.number().min(1, VALID_REQUIRED_FIELD),
  totalTicket: Yup.number().min(1, VALID_REQUIRED_FIELD),
  numberOfWinners: Yup.number().min(1, VALID_REQUIRED_FIELD)
});
