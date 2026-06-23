import { Text, View } from "react-native";
import { useTask } from "../hooks/useTask";
import TaskCard from "../components/TaskCard";
import { useRoute } from "@react-navigation/native";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { type Task } from "../../types/task.type";
import ActionButton from "../components/ActionButton";

const TaskDetailsScreen = () => {
  const route = useRoute();
  const { taskId } = route.params as { taskId: number };
  const { data, isLoading, error } = useTask(taskId);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <Text>Task not found.</Text>;

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
        <ActionButton text="Delete" />
        <ActionButton text="Edit Status" />
      </View>
    </View>
  );
};

export default TaskDetailsScreen;