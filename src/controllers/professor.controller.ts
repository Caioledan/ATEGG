import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProfessor = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({error: "Nome não está inserido"})
        }

        const newProfessor = await prisma.professor.create({
            data: {
                name
            }
        })

        return res.status(201).json(newProfessor)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Não foi possível cadastrar o professor"})
    }
}

export const viewAllProfessors = async (req: Request, res: Response) => {
    try {
        const professors = await prisma.professor.findMany();
        return res.status(200).json(professors);
    } catch (error) {
        return res.status(500).json({error: "Não foi possível mostrar os professores cadastrados"})
    }
}

export const deleteProfessor = async (req: Request, res: Response) => {
    try {
        const {id} = req.body;
        const now = new Date()

        const futureTraining = await prisma.trainingClass.findFirst({
            where: {
                professorId: id,
                startTime: {gt: now}
            }
        })

        if (futureTraining) {
            return res.status(400).json({error: "O professor ainda tem treinamentos para fazer."})
        }

        await prisma.professor.delete({
            where: {
                id: id
            }
        })

        return res.status(200).json("Professor deletado com sucesso");
    } catch (error) {
        return res.status(500).json({error: "Não foi possível deletar o professor"})
    }
}