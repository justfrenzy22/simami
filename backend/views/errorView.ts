import { Response } from "express";

export const exception = (res: Response, status: number, message: string) =>
	res.status(status).json({ status: status, message: message });
