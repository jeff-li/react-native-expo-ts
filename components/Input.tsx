import React from 'react'
import { StyleSheet, TextInput, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

export type InputProps = {
    value: any;
    setValue: (value: any) => void;
    placeholder?: string;
    secureTextEntry?: boolean
};

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  secureTextEntry,
  setValue
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
})