import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const PersonCard = ({navigation, person}) => {
  console.log('person: ', person);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image source={{uri: person.avatar_url}} style={styles.img} />
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.name}>{person.name}</Text>
          {person.location ? (
            <Text style={styles.location}>{person.location}</Text>
          ) : (
            <Text style={styles.location}>No location added</Text>
          )}
        </View>
      </View>
      <View style={styles.grayLine} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
  },
  containerImg: {},
  img: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  containerContent: {
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    marginTop: 5,
    fontSize: 15,
    color: 'gray',
  },
  grayLine: {
    borderWidth: 0.3,
    borderColor: 'gray',
    width: '80%',
    alignSelf: 'center',
  },
});
export default PersonCard;
