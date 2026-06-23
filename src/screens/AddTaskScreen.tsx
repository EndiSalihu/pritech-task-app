import { useState } from "react";
import { View, Text } from "react-native";

import ActionButton from "../components/ActionButton";
import { useCreateTask } from "../hooks/useCreateTask";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../components/FormInput";

export const AddTaskScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [titleError, setTitleError] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");

  const { mutate: createTask, isPending } = useCreateTask();

  const handleSubmit = () => {
    let hasError = false;

    setTitleError("");
    setDescriptionError("");

    if (title.trim().length < 3) {
      setTitleError("Title must be at least 3 characters");
      hasError = true;
    }

    if (!description.trim()) {
      setDescriptionError("Description is required");
      hasError = true;
    }

    if (hasError) return;

    createTask(
      {
        title: title.trim(),
        description: description.trim(),
        status: "Not completed",
        createdDate: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          navigation.goBack();
        },
      }
    );
  };


  return (
    <View style={{ padding: 20 }}>
      <Text>Title</Text>

      <FormInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />

      {!!titleError && (
        <Text style={{ color: "red", marginTop: 4 }}>
          {titleError}
        </Text>
      )}

      <Text style={{ marginTop: 16 }}>Description</Text>

      <FormInput
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />

      {!!descriptionError && (
        <Text style={{ color: "red", marginTop: 4 }}>
          {descriptionError}
        </Text>
      )}

      <View style={{ marginTop: 20 }}>
        <ActionButton
          text={isPending ? "Creating..." : "Create Task"}
          onPress={handleSubmit}
          disabled={isPending}
        />
      </View>
    </View>
  );
};
