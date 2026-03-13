import { Router } from "express";
import { createProfessor, deleteProfessor, viewAllProfessors } from "../controllers/professor.controller.js";

const router = Router();

router.post("/register", createProfessor)
router.get("/get", viewAllProfessors)
router.delete("/delete", deleteProfessor)

export default router;