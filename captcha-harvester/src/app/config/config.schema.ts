import * as yup from "yup";

import { Config } from "./config.interface";

export const configSchema: yup.ObjectSchema<Config> = yup.object().shape({
	SERVER_PORT: yup.number().required(),
});
