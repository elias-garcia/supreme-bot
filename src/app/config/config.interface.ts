import { AccountConfig } from "./account/account-config.interface";
import { ProductConfig } from "./product/product-config.interface";

export interface Config {
	accountConfig: AccountConfig;
	productConfig: ProductConfig;
}
