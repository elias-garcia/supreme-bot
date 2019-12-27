import * as pino from "pino";

export {
	loggerOptions,
};

const loggerOptions: pino.LoggerOptions = {
	prettyPrint: {
		colorize: true,
	},
};
