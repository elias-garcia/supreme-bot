import * as puppeteer from "puppeteer";

import { BROWSER_SHOP_URL, PUPPETEER_LAUNCH_OPTIONS } from "./app.constants";
import { Config, getConfig } from "./config";
import {
	addProductToBasket,
	navigateToCheckout,
	navigateToProductPage,
	selectProductSize,
} from "./scraping/product";

export async function run(): Promise<void> {
	const { accountConfig, productConfig }: Config = getConfig();
	const browser = await puppeteer.launch(PUPPETEER_LAUNCH_OPTIONS);
	const browserPages = await browser.pages();
	const page = browserPages.length > 0
		? browserPages[0]
		: await browser.newPage();

	await page.goto(`${BROWSER_SHOP_URL}/${productConfig.category}`);
	await navigateToProductPage(page, productConfig.keywords, productConfig.color);
	await selectProductSize(page, productConfig.size);
	await addProductToBasket(page);
	await navigateToCheckout(page);
}
