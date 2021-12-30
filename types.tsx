/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

export type AuthStackParamList = {
  Modal: undefined;
  SignIn: undefined;
  ForgotPassword: { currentEmail: string };
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Screen
>;

export type HomeStackParamList = {
  Home: undefined;
  Details: { data: any };
}

export type SettingsStackParamList = {
  Settings: undefined;
  About: undefined;
}

export type AppTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList> | undefined;
  Actions: undefined;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList> | undefined;
};
