import express from 'express';
import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();

const app = express();

app.get("/",(req,res) => {
    res.send("<h1>Welcome to the tasks API")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})