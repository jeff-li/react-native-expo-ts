import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Avatar } from "native-base"
import { useRoute, RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../types';

type DetailsRouteProp = RouteProp<
  HomeStackParamList,
  'Details'
>;

export default function Details() {
  const route = useRoute<DetailsRouteProp>();
  const data = route.params.data || {};
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Avatar
          size="100px"
          source={{
            uri: data.avatarUrl,
          }}
        />
      </View>
      <Text style={styles.text}>{data.fullName}</Text>
      <Text style={styles.text}>{data.recentText}</Text>
      <Text style={styles.text}>{data.timeStamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    paddingBottom: 50
  }
});