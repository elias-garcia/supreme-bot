import * as app from "./app";
import { logger } from "./app/logging";

(async () => {
	try {
		await app.run();
	} catch (e) {
		// tslint:disable-next-line: no-unsafe-any
		if (e.message) {
			// tslint:disable-next-line: no-unsafe-any
			logger.error(e.message);
		} else {
			logger.error(JSON.stringify(e));
		}
		process.exit(0);
	}
})();
