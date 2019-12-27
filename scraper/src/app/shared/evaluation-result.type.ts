export interface EvaluationError {
	success: false;
	message: string;
}

export interface EvaluationSuccess {
	success: true;
}

export type EvaluationResult = EvaluationSuccess | EvaluationError;
