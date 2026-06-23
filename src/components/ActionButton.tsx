import React from "react";
import { Text, TouchableOpacity } from "react-native";

type ActionButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

const ActionButton = ({ text, onPress, disabled }: ActionButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: disabled ? "#D1D5DB" : "#E5E7EB",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <Text
        style={{
          color: "#111827",
          fontWeight: "600",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;