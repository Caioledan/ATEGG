import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCat = async (req: Request, res: Response ) => {
    try {
        const { name, age } = req.body;

        if (!name || !age) {
            return res.status(400).json({error: "Todos os campos devem ser preenchidos."})
        }

        const newCat = await prisma.cat.create({
            data: {
                name,
                age
            }
        });

        return res.status(201).json(newCat)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Não foi possível cadastrar o gato"});
    }
}

export const getAllCats = async (req: Request, res: Response) => {
    try {
        const cats = await prisma.cat.findMany();
        return res.status(200).json(cats);
    } catch (error) {
        return res.status(500).json({error: "Não foi possível listar os gatos"})
    }
}

export const deleteCat = async (req: Request, res: Response) => {
    try {
        const {id} = req.body;
        const now = new Date();

        const futureTraining = await prisma.trainingClass.findFirst({
            where: {
                catId: id,
                startTime: {gt: now}
            }
        })

        if (futureTraining) {
            return res.status(400).json({error: "Este gato tem treinos futuros agendados e não pode ser dispensado agora!"})
        }

        await prisma.cat.delete({
            where: {id}
        })

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({error: "Erro ao tentar remover o gato do sistema"})
    }
}