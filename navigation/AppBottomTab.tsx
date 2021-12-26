import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, Alert } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Actions from '../screens/Actions';
import useAuth from '../hooks/useAuth';
import { RootTabParamList, RootTabScreenProps } from '../types';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();

const AppBottomTab: React.FC = () => {
  const colorScheme = useColorScheme();
  const auth = useAuth();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => Alert.alert(
                'Are you sure?', '',
                [
                  { text: "Cancel" },
                  { text: "Logout", onPress: () => auth.signOut() }
                ]
              )}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="sign-out"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Actions"
        component={Actions}
        options={{
          title: 'Action',
          tabBarIcon: ({ color }) => <FontAwesome name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome name="cogs" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppBottomTab;
