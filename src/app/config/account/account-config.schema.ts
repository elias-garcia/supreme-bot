import * as yup from "yup";

import { AVAILABLE_COUNTRIES, CREDIT_CARD_TYPES } from "../config.constants";
import { AccountAddress, AccountConfig, AccountCreditCard } from "./account-config.interface";
import { AccountCountry } from "./account-country.type";
import { AccountCreditCardType } from "./account-credit-card-type.type";

export const accountValidationSchema: yup.Schema<AccountConfig> = yup.object<AccountConfig>().shape({
	fullName: yup.string().required(),
	email: yup.string().email().required(),
	phone: yup.string().required(),
	address: yup.object<AccountAddress>().required().shape({
		firstLine: yup.string().required(),
		secondLine: yup.string(),
		thirdLine: yup.string(),
		city: yup.string().required(),
		postcode: yup.string().required(),
		country: yup.mixed<AccountCountry>().oneOf(AVAILABLE_COUNTRIES),
	}),
	creditCard: yup.object<AccountCreditCard>().required().shape({
		type: yup.mixed<AccountCreditCardType>().oneOf(CREDIT_CARD_TYPES),
		number: yup.string().required(),
		month: yup.string().required(),
		year: yup.string().required(),
		CVV: yup.string().required(),
	}),
});
