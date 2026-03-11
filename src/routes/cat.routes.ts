import { Router } from "express";
import { createCat, deleteCat, getAllCats } from "../controllers/cat.controller.js";

const router = Router();

router.post("/register", createCat);

router.get("/get", getAllCats);

router.delete("/delete", deleteCat)

export default router;