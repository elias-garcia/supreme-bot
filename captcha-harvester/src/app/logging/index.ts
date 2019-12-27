import * as pino from "pino";

import { loggerOptions } from "./logging.constants";

export {
	logger,
};

const logger = pino(loggerOptions);
