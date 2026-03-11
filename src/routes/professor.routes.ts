import { Router } from "express";
import { createProfessor, viewAllProfessors } from "../controllers/professor.controller.js";

const router = Router();

router.post("/register", createProfessor)

router.get("/get", viewAllProfessors)

export default router;