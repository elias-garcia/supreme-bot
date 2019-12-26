import * as puppeteer from "puppeteer";

import * as accountData from "../data/account.json";
import * as productData from "../data/product.json";
import { MAIN_BROWSER_URL } from "./app.constants";
import { Product } from "./domain/products/product.interface";
import { logger } from "./logging/logger";
import { accountValidationSchema } from "./validation/schemas/account.schema";
import { productValidationSchema } from "./validation/schemas/product.schema";
import { validate } from "./validation/validate";

export async function run(): Promise<void> {
	const account: Account = validate<Account>(accountData, accountValidationSchema);
	logger.info("Account data OK");
	const product: Product = validate<Product>(productData, productValidationSchema);
	logger.info("Product data OK");
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(MAIN_BROWSER_URL);

	await browser.close();

	return;
}
