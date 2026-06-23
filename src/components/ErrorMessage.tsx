import { View, Text } from "react-native";

const ErrorMessage = ({ error }: { error: Error }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "red", fontSize: 18 }}>Error: {error.message}</Text>
    </View>
  );
}

export default ErrorMessage