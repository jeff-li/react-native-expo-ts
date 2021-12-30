import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, useWindowDimensions } from "react-native";

import { LoginBackground } from '../components/Background';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import useAuth from '../hooks/useAuth';
import { AuthStackParamList } from '../types';


type SignInProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignIn'
>;

const SignIn: React.FC<SignInProps> = ({
  navigation
}) => {
  const auth = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { height } = useWindowDimensions();

  const handleLogin = () => {
    console.log(email)
    console.log(password)
    auth.signIn()
    // navigation.navigate('Root')
  }

  const handleReset = () => {
    console.log(email)
    navigation.navigate('ForgotPassword', { currentEmail: email })
  }

  return (
    <LoginBackground>
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
    </LoginBackground>
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