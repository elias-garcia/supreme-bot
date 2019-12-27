import { Page } from "puppeteer";
import { ProductSize } from "../../config/product/product-size.type";
import { logger } from "../../logging";
import { EvaluationResult } from "../../shared/evaluation-result.type";
import {
	ADD_TO_BASKET_INPUT_SELECTOR,
	CHECKOUT_BUTTON_SELECTOR,
	NAVIGATE_TO_CHECKOUT_DELAY,
	PRODUCT_NAME_SEPARATOR,
	PRODUCT_SELECTOR,
	SIZE_SELECT_SELECTOR,
} from "../scraping.constants";

export {
	navigateToProductPage,
	selectProductSize,
	addProductToBasket,
	navigateToCheckout,
};

async function navigateToProductPage(
	page: Page,
	desiredKeywords: string[],
	desiredColor: string,
): Promise<void> {
	logger.info("[SCRAPER] Finding product to cop...");
	await page.waitForSelector(PRODUCT_SELECTOR);

	const evaluationResult: EvaluationResult = await page.evaluate(
		(
			productSelector: string,
			productNameSeparator: string,
			productKeywords: string,
			productColor: string,
		): EvaluationResult => {
			const products: HTMLElement[] = Array.from(document.querySelectorAll(productSelector));
			const matchingProducts: HTMLElement[] = products.filter((product: HTMLElement) => {
				const name = (product.childNodes[1] as HTMLElement).innerText.toLowerCase();
				const color = (product.childNodes[2] as HTMLElement).innerText.toLowerCase();
				const nameWords = name.split(productNameSeparator);

				return color === productColor &&
					nameWords.every((nameWord: string) => productKeywords.includes(nameWord));
			});

			if (matchingProducts.length === 0) {
				return {
					success: false,
					message: `
						There are no products
						matching your keywords (${productKeywords})
						and your color (${productColor})
					`,
				};
			}

			if (matchingProducts.length > 1) {
				return {
					success: false,
					message: `
						There are more than one product
						matching your keywords (${productKeywords})
						and your color: (${productColor})
					`,
				};
			}

			(matchingProducts[0].childNodes[0] as HTMLAnchorElement).click();

			return { success: true };
		},
		PRODUCT_SELECTOR,
		PRODUCT_NAME_SEPARATOR,
		desiredKeywords,
		desiredColor,
	);

	if (evaluationResult.success === false) {
		throw Error(evaluationResult.message);
	}

	logger.info("[SCRAPER] Product to cop found");

	return;
}

async function selectProductSize(
	page: Page,
	desiredSize: ProductSize,
): Promise<void> {
	if (desiredSize === "unique") {
		logger.info("[SCRAPER] The size is unique, skipping selecting product size...");

		return;
	}

	logger.info("[SCRAPER] Selecting product size...");
	await page.waitForSelector(SIZE_SELECT_SELECTOR);

	const evaluationResult: EvaluationResult = await page.evaluate(
		(
			sizeSelectSelector: string,
			productSize: Exclude<ProductSize, "unique">,
		): EvaluationResult => {
			const productSizeSelect: HTMLSelectElement = document.querySelector(sizeSelectSelector);
			const sizeOptions: HTMLOptionElement[] = Array.from(productSizeSelect.children) as HTMLOptionElement[];
			const matchingOption: HTMLOptionElement | undefined = sizeOptions
				.find((option: HTMLOptionElement) => option.innerText.toLowerCase() === productSize.toLowerCase());

			if (matchingOption === undefined) {
				return {
					success: false,
					message: `Size ${desiredSize} is not available`,
				};
			}

			matchingOption.selected = true;

			return { success: true };
		},
		SIZE_SELECT_SELECTOR,
		desiredSize,
	);

	if (evaluationResult.success === false) {
		throw Error(evaluationResult.message);
	}

	logger.info("[SCRAPER] Product size selected");

	return;
}

async function addProductToBasket(
	page: Page,
): Promise<void> {
	logger.info("[SCRAPER] Adding product to basket...");
	await page.waitForSelector(ADD_TO_BASKET_INPUT_SELECTOR);

	await page.evaluate(
		(
			addToBasketInputSelector: string,
		): void => {
			const addToBasketInput: HTMLInputElement = document.querySelector(addToBasketInputSelector);

			addToBasketInput.click();
		},
		ADD_TO_BASKET_INPUT_SELECTOR,
	);

	logger.info("[SCRAPER] Product added to basket...");

	return;
}

async function navigateToCheckout(
	page: Page,
): Promise<void> {
	logger.info("[SCRAPER] Navigating to checkout page...");
	await page.waitForSelector(CHECKOUT_BUTTON_SELECTOR);

	await page.evaluate(
		(
			checkoutButtonSelector: string,
			navigateToCheckoutDelay: number,
		): void => {
			const checkoutButton: HTMLAnchorElement = document.querySelector(checkoutButtonSelector);

			setTimeout(() => {
				checkoutButton.click();
			}, navigateToCheckoutDelay);
		},
		CHECKOUT_BUTTON_SELECTOR,
		NAVIGATE_TO_CHECKOUT_DELAY,
	);

	logger.info("[SCRAPER] Navigated to checkout page...");

	return;
}
