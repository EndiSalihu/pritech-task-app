import { FlatList, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TaskCard from "./TaskCard";

// types
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { type Task } from "../../types/task.type";
import { type TasksStackParamList } from "../navigation/TasksStackNavigator";

type NavProps = NativeStackNavigationProp<TasksStackParamList, "Tasks">;

const TaskList = ({ tasks }: { tasks: Task[] }) => {
    const navigation = useNavigation<NavProps>();

    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() =>
                        navigation.navigate("TaskDetails", {
                            taskId: item.id,
                        })
                    }
                >
                    <View
                        style={{
                            backgroundColor: "#fff",
                            padding: 14,
                            borderRadius: 12,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 6,
                            elevation: 3,
                        }}
                    >
                        <TaskCard task={item} />
                        <Text style={{ color: "#007AFF", marginTop: 8 }}>
                            Tap to view details →
                        </Text>
                    </View>
                </Pressable>
            )}
        />
    );
};

export default TaskList;