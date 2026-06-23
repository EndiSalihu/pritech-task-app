import { API_URL } from "../../api-url";
import { Task } from "../../types/task.type";

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch(`${API_URL}/tasks`);

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
};

export const fetchTask = async (taskId: string): Promise<Task> => {
  const res = await fetch(`${API_URL}/tasks/${taskId}`);

  if (res.status === 404) {
    throw new Error("Task not found");
  }

  if (!res.ok) {
    throw new Error("Failed to fetch task");
  }

  return res.json();
};

export const createTask = async (
  task: Omit<Task, "id">
): Promise<Task> => {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!res.ok) {
    throw new Error("Failed to create task");
  }

  return res.json();
};

export const updateTaskStatus = async (
  taskId: string,
  status: "Completed" | "Not completed"
): Promise<Task> => {
  const res = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) {
    throw new Error("Failed to update task");
  }

  return res.json();
};

export const deleteTask = async (taskId: string): Promise<void> => {
  const res = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete task");
  }
};