import * as dotenv from "dotenv";
import * as fs from "fs";

import { ENV_FILE_PATH } from "../app.constants";
import { Config } from "./config.interface";
import { configSchema } from "./config.schema";

export {
	getConfig,
};

function getConfig(): Config {
	const envFile: Buffer = fs.readFileSync(ENV_FILE_PATH);
	const configToValidate: dotenv.DotenvParseOutput = dotenv.parse(envFile);

	return configSchema.validateSync(configToValidate);
}
