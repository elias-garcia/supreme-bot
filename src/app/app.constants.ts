import { ProductCategory } from "./domain/products/product-category.type";
import { PantSize, TopSize, UniqueSize } from "./domain/products/product-size.type";

// URL
export const MAIN_BROWSER_URL = "https://www.supremenewyork.com/shop/all";

// CAPTCHA site key
export const CAPTCHA_SITE_KEY = "6LeWwRkUAAAAAOBsau7KpuC9AV-6J8mhw4AjC3Xz";

// Categories
export const SHOP_CATEGORIES: ProductCategory[] = [
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

// Sizes
export const TOP_SIZES: TopSize[] = ["Small", "Medium", "Large", "XLarge"];
export const PANT_SIZES: PantSize[] = [30, 32, 34, 36];
export const UNIQUE_SIZE: UniqueSize = "unique";
