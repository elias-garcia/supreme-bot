import { AccountCreditCardType } from "./account-credit-card-type.type";

interface Address {
	firstLine: string;
	secondLine?: string;
	thirdLine?: string;
	postcode: string;
	city: string;
	country: string;
}

interface CreditCard {
	type: AccountCreditCardType;
	number: string;
	month: string;
	year: string;
	CVV: string;
}

export interface Account {
	fullName: string;
	email: string;
	phone: string;
	address: Address;
	creditCard: CreditCard;
}
