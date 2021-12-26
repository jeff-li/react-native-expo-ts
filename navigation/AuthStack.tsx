import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SignIn from '../screens/SignIn';
import ForgotPassword from '../screens/ForgotPassword';
import { RootStackParamList } from '../types';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
 const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
