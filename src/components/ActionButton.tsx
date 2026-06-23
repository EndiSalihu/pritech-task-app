import React from 'react'
import { View, Text } from 'react-native'

type ActionButtonProps = {
  text: string;
};

const ActionButton = ({ text }: ActionButtonProps) => {
  return (
    <View style={{
      flex: 1,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
      backgroundColor: "#E5E7EB",
    }}>
      <Text style={{
        color: "#110f0f",
        fontWeight: "600"
      }}>{text}</Text>
    </View>
  )
}

export default ActionButton