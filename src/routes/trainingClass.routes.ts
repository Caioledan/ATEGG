import { Router } from "express";
import { cancelTrainingClass, createTrainingClass, viewAllTraingingClasses } from "../controllers/trainingClasses.controller.js";

const router = Router()

router.post("/register", createTrainingClass)
router.get("/get", viewAllTraingingClasses)
router.delete("/delete", cancelTrainingClass)

export default router