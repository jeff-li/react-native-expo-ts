import React from 'react'
import { View, ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export type LoginBackgroundProps = {
  children: React.ReactNode
};

export type SafeViewBackgroundProps = {
  children: React.ReactNode
} & View['props'];

export const LoginBackground: React.FC<LoginBackgroundProps> = ({ children }) => {
  // add <ScrollView showsVerticalScrollIndicator={false}> if content doenst fit on screen
  return (
    <ImageBackground
      source={require('../assets/images/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export const SafeViewBackground: React.FC<SafeViewBackgroundProps> = ({style, children }) => {
  return (
    <SafeAreaView style={[styles.safeview, style]}>
      <KeyboardAvoidingView behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'whitesmoke',
  },
  safeview: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ebebeb'
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
})