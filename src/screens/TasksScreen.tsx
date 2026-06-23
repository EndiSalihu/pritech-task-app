import { Text, View, } from 'react-native';
import { useTasks } from '../hooks/useTasks';
import TaskList from '../components/TaskList';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';

export const TasksScreen = () => {
  const { data = [], isLoading, error } = useTasks();

  if (isLoading) return <Spinner />

  if (error) return <ErrorMessage error={error} />

  return (
    <View style={{ paddingVertical:20, paddingHorizontal: 20 }}>
      {data.length === 0 ? (
        <Text>No tasks found.</Text>
      ) : (
        <Text style={{fontSize: 18}}>Available Tasks: {data.length}</Text>
      )}

      <View style={{ marginTop: 10, marginBottom: 60 }}>
      <TaskList tasks={data} />
      </View>
    </View>
  );
};