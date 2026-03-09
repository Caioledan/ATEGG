import { Router } from "express";
import { createCat, getAllCats } from "../controllers/catController.js";

const router = Router();

router.post("/register", createCat);

router.get("/get", getAllCats);

export default router;