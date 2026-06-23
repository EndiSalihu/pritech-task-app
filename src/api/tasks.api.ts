import { API_URL } from "../../api-url";
import { Task } from "../../types/task.type";

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch(`${API_URL}/tasks`);

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
};

export const fetchTask = async (taskId: number): Promise<Task> => {
  const res = await fetch(`${API_URL}/tasks/${taskId}`);

  if (res.status === 404) {
    throw new Error("Task not found");
  }

  if (!res.ok) {
    throw new Error("Failed to fetch task");
  }

  return res.json();
};