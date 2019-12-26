import { ProductCategory } from "./product-category.type";
import { ProductSize } from "./product-size.type";

export interface Product {
	category: ProductCategory;
	keywords: string[];
	color: string;
	size: ProductSize;
}
