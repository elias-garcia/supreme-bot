import * as express from "express";
import { NextFunction, Request, Response } from "express";
import * as expressHandlebars from "express-handlebars";
import * as path from "path";

import {
	RECAPTCHA_RESPONSE_SELECTOR,
	RECAPTCHA_SITE_KEY,
	VIEW_ENGINE,
	VIEWS_PATH,
} from "./app.constants";
import { getConfig } from "./config";
import { errorHandler } from "./error-handling";
import { logger } from "./logging";

export function run(): void {
	const config = getConfig();
	const app = express();

	app.engine(VIEW_ENGINE, expressHandlebars({ extname: VIEW_ENGINE }));
	app.set("view engine", VIEW_ENGINE);
	app.set("views", path.join(__dirname, VIEWS_PATH));

	app.get("/", (req: Request, res: Response) => {
		return res.render("captcha", {
			recaptchaSiteKey: RECAPTCHA_SITE_KEY,
			recaptchaResponseSelector: RECAPTCHA_RESPONSE_SELECTOR,
		});
	});

	app.use(errorHandler);

	app.listen(config.SERVER_PORT, () => {
		logger.info(`App running on port ${config.SERVER_PORT}`);
	});
}
