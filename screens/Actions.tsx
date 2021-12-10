import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Actions() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Actions Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold'
  }
});