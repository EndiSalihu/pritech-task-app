import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { type TabParamList } from "../../types/tab-param-list.type";
import { AddTaskScreen } from "../screens/AddTaskScreen";
import { TasksStack } from "../navigation/TasksStackNavigator";

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
      <Tab.Screen
        name="Tasks Stack"
        component={TasksStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Add Task"
        component={AddTaskScreen}
      />
    </Tab.Navigator>
  );
}