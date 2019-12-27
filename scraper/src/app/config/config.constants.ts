import { AccountCountry } from "./account/account-country.type";
import { AccountCreditCardType } from "./account/account-credit-card-type.type";
import { ProductCategory } from "./product/product-category.type";
import { PantSize, TopSize, UniqueSize } from "./product/product-size.type";

export {
	PRODUCT_CATEGORIES,
	TOP_SIZES,
	PANT_SIZES,
	UNIQUE_SIZE,
	CREDIT_CARD_TYPES,
	AVAILABLE_COUNTRIES,
};

const PRODUCT_CATEGORIES: ProductCategory[] = [
	"jackets",
	"shirts",
	"tops_sweaters",
	"sweatshirts",
	"pants",
	"t-shirts",
	"hats",
	"bags",
	"accesories",
	"skate",
];

const TOP_SIZES: TopSize[] = ["small", "medium", "large", "xlarge"];
const PANT_SIZES: PantSize[] = ["30", "32", "34", "36"];
const UNIQUE_SIZE: UniqueSize = "unique";

const CREDIT_CARD_TYPES: AccountCreditCardType[] = ["visa", "american_express", "master", "solo"];

const AVAILABLE_COUNTRIES: AccountCountry[] = [
	"GB",
	"NB",
	"AT",
	"BY",
	"BE",
	"BG",
	"HR",
	"CZ",
	"DK",
	"EE",
	"FI",
	"FR",
	"DE",
	"GR",
	"HU",
	"IS",
	"IE",
	"IT",
	"LV",
	"LT",
	"LU",
	"MC",
	"NL",
	"NO",
	"PL",
	"PT",
	"RO",
	"RU",
	"SK",
	"SI",
	"ES",
	"SE",
	"CH",
	"TR",
];
