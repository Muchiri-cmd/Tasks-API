# Tasks-API

A simple REST API for managing your tasks. Built with Express.js and Prisma.

## Base URL
```
http://localhost:3000
```

## Endpoints

### Welcome Page
**GET** `/`

Returns a welcome message.

**Response:**
```html
<h1>Welcome to the tasks API
```

---

### Create a New Task
**POST** `/tasks`

Add a new task to your list.

**Request Body:**
```json
{
  "title": "Buy groceries",
  "description": "Get milk, bread, and eggs from the store"
}
```

**Success Response (200):**
```json
{
  "id": "clx123abc",
  "title": "Buy groceries",
  "description": "Get milk, bread, and eggs from the store",
  "isCompleted": false,
  "createdAt": "2024-06-12T10:30:00.000Z",
  "updatedAt": "2024-06-12T10:30:00.000Z"
}
```

**Error Response (500):**
```json
{
  "message": "An error occured. Please try again later."
}
```

---

### Get All Incomplete Tasks
**GET** `/tasks`

Fetch all tasks that haven't been completed yet.

**Success Response (200):**
```json
[
  {
    "id": "clx123abc",
    "title": "Buy groceries",
    "description": "Get milk, bread, and eggs",
    "isCompleted": false,
    "createdAt": "2024-06-12T10:30:00.000Z",
    "updatedAt": "2024-06-12T10:30:00.000Z"
  },
  {
    "id": "clx456def",
    "title": "Walk the dog",
    "description": "Take Max for a 30-minute walk",
    "isCompleted": false,
    "createdAt": "2024-06-12T11:00:00.000Z",
    "updatedAt": "2024-06-12T11:00:00.000Z"
  }
]
```

**Error Response (500):**
```json
{
  "message": "Something went wrong , please try again later."
}
```

---

### Get a Specific Task
**GET** `/tasks/:id`

Retrieve details for a single task using its ID.

**URL Parameters:**
- `id` - The task ID

**Success Response (200):**
```json
{
  "id": "clx123abc",
  "title": "Buy groceries",
  "description": "Get milk, bread, and eggs",
  "isCompleted": false,
  "createdAt": "2024-06-12T10:30:00.000Z",
  "updatedAt": "2024-06-12T10:30:00.000Z"
}
```

**Not Found Response (404):**
```json
{
  "message": "Task not found."
}
```

**Error Response (500):**
```json
{
  "message": "Error fetching task, please try again later."
}
```

---

### Update a Task
**PATCH** `/tasks/:id`

Modify an existing task. You can update the title, description, or mark it as completed.

**URL Parameters:**
- `id` - The task ID

**Request Body:**
```json
{
  "title": "Buy groceries and cook dinner",
  "description": "Get ingredients and prepare pasta",
  "isCompleted": true
}
```

**Success Response (200):**
```json
{
  "id": "clx123abc",
  "title": "Buy groceries and cook dinner",
  "description": "Get ingredients and prepare pasta",
  "isCompleted": true,
  "createdAt": "2024-06-12T10:30:00.000Z",
  "updatedAt": "2024-06-12T15:45:00.000Z"
}
```

**Error Response (500):**
```json
{
  "message": "Error updating task, please try again later."
}
```

---

### Delete a Task
**DELETE** `/tasks/:id`

Remove a task permanently from your list.

**URL Parameters:**
- `id` - The task ID

**Success Response (200):**
```json
{
  "message": "Task deleted successfully."
}
```

**Error Response (500):**
```json
{
  "message": "Error deleting task, please try again later."
}
```

## Quick Examples

### Create a task:
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Node.js", "description": "Complete the tutorial"}'
```

### Get all tasks:
```bash
curl http://localhost:3000/tasks
```

### Mark a task as complete:
```bash
curl -X PATCH http://localhost:3000/tasks/clx123abc \
  -H "Content-Type: application/json" \
  -d '{"isCompleted": true}'
```

### Delete a task:
```bash
curl -X DELETE http://localhost:3000/tasks/clx123abc
```

>> You may use other options such as postman , thunder client and the liks to try out the endpoints