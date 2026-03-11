import express from 'express';
import catRoutes from './routes/cat.routes.js';
import professorRoutes from './routes/professor.routes.js';
import trainingClassesRoutes from "./routes/trainingClass.routes.js"

const app = express();
app.use(express.json());

app.use('/cats', catRoutes)
app.use('/professors', professorRoutes)
app.use("/classes", trainingClassesRoutes)

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)) 