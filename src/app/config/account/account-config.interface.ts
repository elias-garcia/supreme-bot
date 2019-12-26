import { AccountCountry } from "./account-country.type";
import { AccountCreditCardType } from "./account-credit-card-type.type";

export interface AccountAddress {
	firstLine: string;
	secondLine?: string;
	thirdLine?: string;
	postcode: string;
	city: string;
	country: AccountCountry;
}

export interface AccountCreditCard {
	type: AccountCreditCardType;
	number: string;
	month: string;
	year: string;
	CVV: string;
}

export interface AccountConfig {
	fullName: string;
	email: string;
	phone: string;
	address: AccountAddress;
	creditCard: AccountCreditCard;
}
