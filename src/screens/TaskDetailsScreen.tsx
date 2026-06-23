import { Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { useTask } from "../hooks/useTask";
import { useDeleteTask } from "../hooks/useDeleteTask";
import { useUpdateTask } from "../hooks/useUpdateTask";

import TaskCard from "../components/TaskCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import ActionButton from "../components/ActionButton";

import { type Task } from "../../types/task.type";

const TaskDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { taskId } = route.params as { taskId: string };

  const { data, isLoading, error } = useTask(taskId);

  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask();
  const { mutate: updateTask, isPending: isUpdating } = useUpdateTask();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <Text>Task not found.</Text>;

  const handleDelete = () => {
    deleteTask(taskId, {
      onSuccess: () => {
        navigation.goBack();
      },
    });
  };

  const handleToggleStatus = () => {
    updateTask({
      taskId,
      status:
        data.status === "Completed" ? "Not completed" : "Completed",
    });
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        margin: 20,
        padding: 14,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
      }}
    >
      <TaskCard task={data as Task} />

      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <ActionButton
          text={isDeleting ? "Deleting..." : "Delete"}
          onPress={handleDelete}
        />

        <ActionButton
          text={isUpdating ? "Updating..." : "Edit Status"}
          onPress={handleToggleStatus}
        />
      </View>
    </View>
  );
};

export default TaskDetailsScreen;