import * as yup from "yup";

export function validate<T>(data: unknown, schema: yup.Schema<T>): T {
	return schema.validateSync(data);
}
