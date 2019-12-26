import * as yup from "yup";

import { PANT_SIZES, PRODUCT_CATEGORIES, TOP_SIZES, UNIQUE_SIZE } from "../config.constants";
import { ProductCategory } from "./product-category.type";
import { ProductConfig } from "./product-config.interface";
import { ProductSize } from "./product-size.type";

export const productConfigValidationSchema: yup.Schema<ProductConfig> = yup.object<ProductConfig>().shape({
	category: yup.mixed<ProductCategory>().oneOf(PRODUCT_CATEGORIES),
	keywords: yup.array().of(yup.string().lowercase()).required(),
	color: yup.string().lowercase().required(),
	size: yup.mixed<ProductSize>().oneOf([...TOP_SIZES, ...PANT_SIZES, UNIQUE_SIZE]),
});
