import { View, Text } from "react-native";
import { type Task } from "../../types/task.type";

type TaskCardProps = {
    task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
    return (
        <View style={{ gap: 10, }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{task.title}</Text>
            <Text numberOfLines={2}>{task.description}</Text>
            <Text style={task.status === "Completed" ? { color: "green" } : { color: "red" }}>
                {task.status}
            </Text>
            <Text style={{ fontSize: 12, color: "#888" }}>Date Created: {task.createdDate}</Text>

        </View>
    )
}

export default TaskCard