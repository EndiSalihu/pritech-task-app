import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../../types/tab-param-list.type";
import { TasksScreen } from "../screens/TasksScreen";
import { AddTaskScreen } from "../screens/AddTaskScreen";

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: () => null,
        tabBarLabelStyle: {
          fontSize: 16,
          color: '#fff',
        },
        tabBarStyle: {
          backgroundColor: '#253eba',
        },
      }}>
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Add Task" component={AddTaskScreen} />
    </Tab.Navigator>
  );
}