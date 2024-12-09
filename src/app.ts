import express from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipeRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
// middleware
app.use(cors());
app.use(express.json());
// rutas que usaremos para los modelos
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

export default app;