import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, TextInput, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { RootStackParamList } from '../types';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';


type SignInProps = NativeStackScreenProps<
  RootStackParamList,
  'SignIn'
>;

const SignIn: React.FC<SignInProps> = ({
  navigation
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { height } = useWindowDimensions();

  const handleLogin = () => {
    console.log(email)
    console.log(password)
    navigation.navigate('Root')
  }

  const handleReset = () => {
    console.log(email)
    navigation.navigate('ForgotPassword', { currentEmail: email })
  }

  return (
    <Background>
      <Logo />
      <Input
        value={email}
        setValue={setEmail}
        placeholder="email"
      />
      <Input
        value={password}
        setValue={setPassword}
        placeholder="password"
        secureTextEntry
      />
      <Button
        text='Login'
        onPress={handleLogin}
      />
      <Button
        text='Forgot Password?'
        onPress={handleReset}
        type="link"
      />
    </Background>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%'
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  button: {
    backgroundColor: 'black',
    width: '100%',
    padding: 15,
  },
  buttonText: {
    color: 'white'
  }
})