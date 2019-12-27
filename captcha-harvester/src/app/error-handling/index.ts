import { NextFunction, Request, Response } from "express";

import { logger } from "../logging";

export {
	errorHandler,
};

function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
): Response {
	// tslint:disable-next-line: strict-boolean-expressions
	if (err.message) {
		// tslint:disable-next-line: no-unsafe-any
		logger.error(err.message);
	} else {
		logger.error(JSON.stringify(err));
	}

	return res.status(500).send();
}
