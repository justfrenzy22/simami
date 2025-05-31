import { Request, Response, NextFunction, Router } from "express";

const router = Router();

import { createItem, getItems } from "../controllers/itemController";

router.post("/items", createItem);
router.get("/items", getItems);

export default router;
// https://www.postman.com/galactic-escape-205994/workspace/new-team-workspace/collection/31467064-4e272c54-bf75-419c-9344-18512f2ddd6e?action=share&creator=31467064&active-environment=31467064-0d78c08b-6f76-424e-b21c-ceba3d682099