import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../api/tasks.api";
import { Task } from "../../types/task.type";

export const useTasks = () => {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};