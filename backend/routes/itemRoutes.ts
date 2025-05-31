import { Request, Response, NextFunction, Router } from "express";

const router = Router();

import { createItem, getItems } from "../controllers/itemController";

router.post("/items", createItem);
router.get("/items", getItems);

export default router;