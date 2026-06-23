import { View, Text } from "react-native";
import ActionButton from "./ActionButton";

type FilterTasksProps = {
  statusFilter: "all" | "Completed" | "Not completed";
  setStatusFilter: React.Dispatch<
    React.SetStateAction<"all" | "Completed" | "Not completed">
  >;
};

const FilterTasks = ({ statusFilter, setStatusFilter }: FilterTasksProps) => {
    return (
        <View style={{ marginTop: 10 }}>
            <Text style={{ paddingBottom: 8 }}>Filter tasks by status</Text>
            <ActionButton
                text={`Filter: ${statusFilter}`}
                onPress={() => {
                    if (statusFilter === "all") {
                        setStatusFilter("Completed");
                    } else if (statusFilter === "Completed") {
                        setStatusFilter("Not completed");
                    } else {
                        setStatusFilter("all");
                    }
                }}
            />
        </View>
    )
}

export default FilterTasks