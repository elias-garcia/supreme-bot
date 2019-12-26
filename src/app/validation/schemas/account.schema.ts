import * as yup from "yup";

export const accountValidationSchema: yup.Schema<Account> = yup.object<Account>().shape({
	fullName: yup.string().required(),
	email: yup.string().email().required(),
	phone: yup.string().required(),
	address: yup.object().required().shape({
		firstLine: yup.string().required(),
		secondLine: yup.string(),
		thirdLine: yup.string(),
		city: yup.string().required(),
		postcode: yup.string().required(),
		country: yup.string().required(),
	}),
	creditCard: yup.object().required().shape({
		type: yup.string().required(),
		number: yup.string().required(),
		month: yup.string().required(),
		year: yup.string().required(),
		CVV: yup.string().required(),
	}),
});
