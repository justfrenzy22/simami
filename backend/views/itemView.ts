import { IItem } from "../types/IItem";
import { Response } from "express";

export const created = (res: Response, item: IItem) =>
	res
		.status(201)
		.json({ status: 201, message: "Item created successfully", item: item });
export const successItems = (res: Response, item: IItem[]) =>
	res.status(200).json({
		status: 200,
		message: "Items retrieved successfully",
		items: item,
	});
export const noName = (res: Response) =>
	res.status(400).json({ status: 400, message: "Name is required" });
export const errorItem = (res: Response, message: string) =>
	res.status(400).json({ status: 400, message: message });
export const exists = (res: Response) =>
	res.status(400).json({ status: 400, message: "Item already exists" });
