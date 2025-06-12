import express from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the tasks API");
});

//Create Task
app.post("/tasks", async (req, res) => {
  try {
    console.log(req.body)
    const { title, description } = req.body;
    const newTask = await client.task.create({
      data: { title, description },
    });
    res.status(200).json(newTask);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured. Please try again later." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
