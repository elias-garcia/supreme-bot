import * as yup from "yup";

import { PANT_SIZES, SHOP_CATEGORIES, TOP_SIZES, UNIQUE_SIZE } from "../../app.constants";
import { ProductCategory } from "../../domain/products/product-category.type";
import { ProductSize } from "../../domain/products/product-size.type";
import { Product } from "../../domain/products/product.interface";

export const productValidationSchema: yup.Schema<Product> = yup.object<Product>().shape({
	category: yup.mixed<ProductCategory>().oneOf(SHOP_CATEGORIES),
	keywords: yup.array().of(yup.string()),
	color: yup.string().required(),
	size: yup.mixed<ProductSize>().oneOf([...TOP_SIZES, ...PANT_SIZES, UNIQUE_SIZE]),
});
