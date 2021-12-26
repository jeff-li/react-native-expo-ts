import React from 'react';
import { 
  NavigationContainer,
  DefaultTheme, 
  DarkTheme,
} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';

import AppBottomTab from './AppBottomTab';
import AuthStack from './AuthStack';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const {authData, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {authData?.token ? <AppBottomTab /> : <AuthStack />}
      
    </NavigationContainer>
  );
};
