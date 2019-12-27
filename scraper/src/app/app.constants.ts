import { LaunchOptions } from "puppeteer";

export const BROWSER_BASE_URL = "https://www.supremenewyork.com";

export const BROWSER_SHOP_URL = `${BROWSER_BASE_URL}/shop/all`;

export const PUPPETEER_LAUNCH_OPTIONS: LaunchOptions = {
	headless: false,
};
