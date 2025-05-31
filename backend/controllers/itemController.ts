import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { IItem } from "../types/IItem";

import * as view from "../views/itemView";
import { items } from "../models/item";

export const createItem = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	try {
		const { name } = req.body;

		if (!name) {
			view.noName(res);
			return;
		}
		if (items.find((item) => item.name === name)) {
			view.exists(res);
			return;
		}
		const item: IItem = {
			name: name,
			timestamp: new Date(),
			id: randomUUID(),
		};
		items.push(item);
		view.successItem(res, item);
		return;
	} catch (err) {
		next(err);
	}
};

export const getItems = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        view.successItems(res, items);
        return;
    } catch (err) {
        next(err);
    }
};