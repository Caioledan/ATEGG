import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTrainingClass = async (req: Request, res: Response) => {
    try {
        const {startTime, professorId, catId} =  req.body;

        if (!startTime || !professorId || !catId) {
            return res.status(400).json("Preencha todos os campos")
        }

        const start = new Date(startTime);
        const end = new Date(start);
        end.setHours(start.getHours() + 1);
        const now = new Date()

        if (start < now) {
            return res.status(400).json({error: "Ainda não conseguimos acesso a máquna do tempo..."})
        }

        const conflict = await prisma.trainingClass.findFirst({
            where: {
                OR: [
                    {
                        startTime: {lt: end},
                        endTime: {gt: start}
                    }
                ]
            }
        })

        if (conflict) {
            return res.status(409).json({error: "A arena de treinamento já está ocupada por outro guerreiro nesse horário"})
        }

        const newTrainingClass = await prisma.trainingClass.create({
            data: {
                startTime,
                endTime: end,
                professorId,
                catId
            }
        })

        return res.status(201).json(newTrainingClass);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Não foi possível cadastrar nova aula"})
    }
}

export const viewAllTraingingClasses = async (req: Request, res: Response) => {
    try {
        const classes = await prisma.trainingClass.findMany({
            include: {
                professor: true,
                cat: true
            }
        });

        const formattedClasses = classes.map((classes) => {
            return {
                id: classes.id,
                day: classes.startTime.toLocaleDateString("pt-BR"),
                start: `${classes.startTime.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}h`,
                end: `${classes.endTime.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}h`,
                professor: classes.professor.name,
                cat: classes.cat.name
            }
        })


        return res.status(200).json(formattedClasses);
    } catch (error) {
        return res.status(500).json({error: "Não foi possível encontrar as aulas"})
    }
}

export const cancelTrainingClass = async (req: Request, res: Response) => {
    try{ 
        const {id} = req.body;

        await prisma.trainingClass.delete({
            where: {
                id: id,
            }
        })

        return res.status(200).json("Aula cancelada com sucesso")
    } catch (error) {
        return res.status(500).json({error: "Erro ao cancelar a aula"})
    }
}