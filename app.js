// Importing required modules
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());

// Parses incoming request bodies in JSON format
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
