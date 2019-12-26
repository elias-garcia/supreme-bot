import { LaunchOptions } from "puppeteer";

import { AccountCountry } from "./config/account/account-country.type";
import { AccountCreditCardType } from "./config/account/account-credit-card-type.type";
import { ProductCategory } from "./config/product/product-category.type";
import { PantSize, TopSize, UniqueSize } from "./config/product/product-size.type";

export const BROWSER_BASE_URL = "https://www.supremenewyork.com";
export const BROWSER_SHOP_URL = `${BROWSER_BASE_URL}/shop/all`;

export const CAPTCHA_SITE_KEY = "6LeWwRkUAAAAAOBsau7KpuC9AV-6J8mhw4AjC3Xz";

export const PUPPETEER_LAUNCH_OPTIONS: LaunchOptions = {
	headless: false,
};
