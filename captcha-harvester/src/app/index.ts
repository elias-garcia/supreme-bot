import * as express from "express";
import { NextFunction, Request, Response } from "express";
import * as expressHandlebars from "express-handlebars";
import * as path from "path";

import {
	RECAPTCHA_RESPONSE_SELECTOR,
	RECAPTCHA_SITE_KEY,
	VIEW_ENGINE,
	VIEW_ENGINE_PROPERTY_KEY,
	VIEWS_PATH,
	VIEWS_PROPERTY_KEY,
} from "./app.constants";
import { errorHandler } from "./error-handling";
import { logger } from "./logging";

export function run(): void {
	const app = express();

	app.engine(VIEW_ENGINE, expressHandlebars({ extname: VIEW_ENGINE }));
	app.set(VIEW_ENGINE_PROPERTY_KEY, VIEW_ENGINE);
	app.set(VIEWS_PROPERTY_KEY, path.join(__dirname, VIEWS_PATH));

	app.get("/", (req: Request, res: Response) => {
		return res.render("captcha", {
			recaptchaSiteKey: RECAPTCHA_SITE_KEY,
			recaptchaResponseSelector: RECAPTCHA_RESPONSE_SELECTOR,
		});
	});

	app.use(errorHandler);

	app.listen(3000, () => {
		logger.info("App running on port 3000");
	});
}
