import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type BackButtonProps = {
  goBack: () => void;
}
const BackButton: React.FC<BackButtonProps> = ({
  goBack
}) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Text>Back</Text>
    </TouchableOpacity>
  )
}

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 4,
  },
})