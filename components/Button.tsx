import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export type ButtonProps = {
    text: string;
    onPress: () => void;
    type?: 'primary' | 'link';
    bgColor?: string;
    fgColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  type = 'primary',
  bgColor,
  fgColor
}) => {
  return (
    <View
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {}
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
      >
        <Text 
          style={[
            styles.btnText,
            styles[`btnText_${type}`],
            fgColor ? { color: fgColor } : {}
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5
  },
  container_primary: {
    backgroundColor: 'black',
  },
  container_link: {
    backgroundColor: 'transparent',
  },
  btnText: {
    
    fontWeight: 'bold'
  },
  btnText_primary: {
    color: 'white',
  },
  btnText_link: {
    color: 'gray',
  }
})