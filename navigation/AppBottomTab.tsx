import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import About from '../screens/About';
import Details from '../screens/Details';
import Actions from '../screens/Actions';
import { AppTabParamList } from '../types';

// Usually tabs don't just display one screen. Y
// https://reactnavigation.org/docs/tab-based-navigation#a-native-stack-navigator-for-each-tab
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="About" component={About} />
    </SettingsStack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const BottomTab = createBottomTabNavigator<AppTabParamList>();

const AppBottomTab: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={() => ({
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Actions"
        component={Actions}
        options={{
          title: 'Action',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                bottom: 10, // space from bottombar
                height: 58,
                width: 58,
                borderRadius: 58,
                backgroundColor: '#5a95ff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome5 name="code" color="white" size={26} />
            </View>
          )
        }}
      />
      <BottomTab.Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cogs" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppBottomTab;

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
 function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={20} style={{ marginBottom: -3 }} {...props} />;
}
