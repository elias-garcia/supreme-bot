import { Config } from "./config.interface";

import * as accountData from "../../data/account.json";
import * as productData from "../../data/product.json";
import { logger } from "../logging";
import { AccountConfig } from "./account/account-config.interface";
import { accountValidationSchema } from "./account/account-config.schema";
import { ProductConfig } from "./product/product-config.interface";
import { productConfigValidationSchema } from "./product/product-config.schema";

export {
	Config,
	getConfig,
};

function getConfig(): Config {
	const accountConfig: AccountConfig = accountValidationSchema.validateSync(accountData);
	logger.info("[CONFIG] Account data loaded");
	const productConfig: ProductConfig = productConfigValidationSchema.validateSync(productData);
	logger.info("[CONFIG] Product data loaded");

	return { accountConfig, productConfig };
}
