import { Text,View } from 'react-native';
import { useTasks } from '../hooks/useTasks';
import TaskList from '../components/TaskList';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';
import { useState } from 'react';
import FilterTasks from '../components/FilterTasks';
import SearchInput from '../components/SearchInput';

export const TasksScreen = () => {
  const { data = [], isLoading, error } = useTasks();
  const [statusFilter, setStatusFilter] = useState<"all" | "Completed" | "Not completed">("all");
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) return <Spinner />
  if (error) return <ErrorMessage error={error} />

  const filteredTasks = data.filter((task) => {
    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;

  });

  return (
    <View style={{ flex: 1, padding: 30, backgroundColor: "#f0f0f0" }}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterTasks
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <Text style={{ fontSize: 18, paddingTop: 5 }}>
        Available Tasks: {filteredTasks.length}
      </Text>

      {filteredTasks.length === 0 ? (
        <Text>No tasks found.</Text>
      ) : (
        <View>
          <TaskList tasks={filteredTasks} />
        </View>
      )}
    </View>
  );
};