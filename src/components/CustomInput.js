import React from "react";
import { TextInput } from "react-native-paper";

export default function CustomInput({ label, value, onChangeText, style, ...props }) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      onChangeText={onChangeText}
      style={[{ marginBottom: 5 }, style]}
      {...props}
    />
  );
}
