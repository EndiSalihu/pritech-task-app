import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskDetailsScreen from "../screens/TaskDetailsScreen";
import { TasksScreen } from "../screens/TasksScreen";

export type TasksStackParamList = {
    Tasks: undefined;
    TaskDetails: { taskId: string };
};

const Stack = createNativeStackNavigator<TasksStackParamList>();

export const TasksStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Tasks"
                component={TasksScreen}
            />
            <Stack.Screen
                name="TaskDetails"
                component={TaskDetailsScreen}
                options={{ title: "Task Details" }}
            />
        </Stack.Navigator>
    );
};