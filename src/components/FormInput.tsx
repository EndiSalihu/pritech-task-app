import { TextInput } from "react-native"

type FormInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
};

const FormInput = ({ value, onChangeText, placeholder }: FormInputProps) => {
  return (
    <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            multiline
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 8,
              borderRadius: 8,
              minHeight: 50,
              textAlignVertical: "top",
            }}
          />
  )
}

export default FormInput