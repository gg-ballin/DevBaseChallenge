import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import PersonCard from '../components/PersonCard';

const Person = ({navigation, route}) => {
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <PersonCard person={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Person;
