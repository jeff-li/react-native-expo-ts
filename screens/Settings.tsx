import React from "react"
import {
  Box,
  FlatList,
  Icon,
  HStack,
  Text,
  Spacer,
} from "native-base"
import { StyleSheet, Alert, TouchableOpacity} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import useAuth from '../hooks/useAuth';

const Settings = ({ navigation }) => {
  const auth = useAuth();
  const data = [{
    id: 'help',
    icon: 'question-circle',
    label: "Help",
    color: 'black',
    action: () => { console.warn('Help')}
  }, {
    id: "about",
    icon: 'info',
    label: 'About',
    color: 'black',
    action: () => navigation.navigate('SettingsDetails')
  }, {
    id: "logout",
    icon: 'sign-out-alt',
    label: 'Logout',
    color: 'crimson',
    action: () => Alert.alert(
      'Are you sure?', '',
      [
        { text: "Cancel" },
        { text: "Logout", onPress: () => auth.signOut() }
      ]
    )
  }]
  return (
    <Box w={{ base: "100%", md: "25%" }} style={{ height: '100%' }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={item.action}>
            <Box
              borderBottomWidth="1"
              borderColor="coolGray.200"
              style={styles.list}
            >
              <HStack space={3} justifyContent="space-between">
                <Box style={styles.iconContainer}>
                  <FontAwesome5 name={item.icon} size={18} color={item.color}/>
                </Box>
                <Text style={{ color: item.color }}>
                  {item.label}
                </Text>
                <Spacer />
              </HStack>
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

export default Settings;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 25,
    paddingVertical: 15,
    alignItems: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    width: 50,
  }
})