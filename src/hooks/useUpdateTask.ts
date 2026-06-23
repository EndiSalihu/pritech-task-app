import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTaskStatus } from "../api/tasks.api";

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      taskId,
      status,
    }: {
      taskId: string;
      status: "Completed" | "Not completed";
    }) => updateTaskStatus(taskId, status),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });

      queryClient.invalidateQueries({
        queryKey: ["task", variables.taskId],
      });
    },
  });
};