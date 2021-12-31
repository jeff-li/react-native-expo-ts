import React, { useState, useEffect } from 'react';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Divider,
  useToast,
  View
} from "native-base"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { TitleText } from '../components/StyledText';
import { SafeViewBackground } from '../components/Background';
import Button from '../components/Button';
import { HomeStackParamList } from '../types';


type HomeNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;

export default function Home() {
  // TODO: auto refresh after new data has been added to async storage
  const navigation = useNavigation<HomeNavigationProp>();
  const [data, setData] = useState<any[]>([]);
  const toast = useToast()

  useEffect(() => {
    getAsyncData()
  }, [])

  const getAsyncData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('appData')
      if (storedData) {
        setData(JSON.parse(storedData))
      }
    } catch(e) {
      toast.show({
        description: "Failed to get your history.",
      })
    }
  };

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem('appData')
      setData([])
    } catch(e) {
      toast.show({
        description: "Failed to clear your history.",
      })
    }
  };

  const handleSelect = (item: any): void => {
    navigation.navigate("Details", { data: item});
  }

  return (
    <SafeViewBackground style={styles.container}>
      <TitleText>Welcome</TitleText>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco
      </Text>
      <Divider style={styles.divider} />
      <Heading fontSize="xl" pb="3">
        Recent Data:
      </Heading>
      <View>
        <Button text='Refresh' type='link' onPress={getAsyncData} />  
        <Button text='Clear history' type='link' onPress={clearHistory} />
      </View>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelect(item)}>
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeViewBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ebebeb'
  },
  divider: {
    marginVertical: 15
  },
  description: {
    marginTop: 10,
    color: '#333',
  }
});