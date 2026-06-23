import { useQuery } from "@tanstack/react-query";
import { fetchTask } from "../api/tasks.api";
import { Task } from "../../types/task.type";

export const useTask = (taskId: number) => {
  return useQuery<Task>({
    queryKey: ["task", taskId],
    queryFn: () => fetchTask(taskId),
    enabled: !!taskId,
  });
};