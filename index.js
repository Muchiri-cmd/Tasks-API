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
    console.log(req.body);
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

//Get all Tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await client.task.findMany({
      //get only incomplete tasks
      where: {
        isCompleted: false,
      },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong , please try again later." });
  }
});

//Get 1 Task
app.get("/tasks/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const task = await client.task.findFirst({
      where: {
        id, //: id
      },
    });
    task
      ? res.status(200).json(task)
      : res.status(404).json({ message: "Task not found." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching task, please try again later." });
  }
});

//Update Task
app.patch("/tasks/:id", async (req, res) => {
  try {
    console.log(req.body);
    console.log("Req Params:", req.params);

    const { id } = req.params;

    console.log("Req Body:", req.body);

    const { title, description, isCompleted } = req.body;

    const updatedTask = await client.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        isCompleted,
      },
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error updating task, please try again later." });
  }
});

//Delete Task
app.delete("/tasks/:id", async(req,res) => {
    try{
        console.log(req.params);
        const { id } = req.params;
        console.log(id);
        await client.task.delete({
            where: {
                id,
            },
        });
        res.status(200).json({ message: "Task deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task, please try again later." });
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
