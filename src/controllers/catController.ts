import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCat = async (req: Request, res: Response ) => {
    try {
        const { name, age } = req.body;
        console.log(name, age)

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