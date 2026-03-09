import express from 'express';
import catRoutes from './routes/catRoutes.js';

const app = express();
app.use(express.json());

app.use('/cats', catRoutes)

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)) 