import React, { useState } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text } from "react-native";
import Background from '../components/Background';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import Input from '../components/Input';
import { MonoText } from '../components/StyledText';
import { RootStackParamList } from '../types';

type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;
type ForgotPasswordRouteProp = RouteProp<
  RootStackParamList,
  'ForgotPassword'
>;

const ForgotPassword: React.FC<ForgotPasswordNavigationProp> = () => {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();
  const route = useRoute<ForgotPasswordRouteProp>();
  const [email, setEmail] = useState<string>(route.params.currentEmail || '');
  const [btnTxt, setBtnTxt] = useState<string>('Send Reset Email');

  function resetPassword() {
    setBtnTxt('Sent')
  }
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Text 
        style={{ color: 'gray', margin: 10, fontSize: 27}}
      >
        Reset Your Password
      </Text>
      <Input value={email} setValue={setEmail} placeholder='Email'/>
      <MonoText>You will receive an email with the password reset link.</MonoText>
      <Button text={btnTxt} onPress={resetPassword}/>
    </Background>
  )
}

export default ForgotPassword;
