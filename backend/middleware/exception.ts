// exception middleware or error middleware
import * as view from "../views/errorView";

export const exception = (err: Error, req: any, res: any, next: any): void => {
	// future error handling
	console.error(err);
	view.exception(res, 500, err.message);
	return;
};
