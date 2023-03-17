import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import HomeCard from '../components/HomeCard';

const usersGithub = [
  'GrahamCampbell',
  'fabpot',
  'weierophinney',
  'rkh',
  'josh',
];
const API_URL = 'https://api.github.com/users';

const Home = ({navigation}) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const userList = [];
    const newUserList = usersGithub.map(user => {
      const URL = `${API_URL}/${user}`;
      fetch(URL, {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: 'Bearer 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',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
        .then(response => response.json())
        .then(res => {
          userList.push(res);
        });
      setUsers(userList);
    });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.containerTitles}>
        <Text style={styles.title}>Top 5 Github Users</Text>
        <Text style={styles.subtitle}>
          Tap the username to see more {'\n'} information
        </Text>
      </View>
      <View style={styles.list}>
        {users ? (
          <FlatList
            data={users}
            renderItem={({item, index}) => (
              <HomeCard navigation={navigation} item={item} index={index} />
            )}
          />
        ) : (
          <ActivityIndicator size={20} color={'red'} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerTitles: {
    marginBottom: 20,
    marginTop: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
  list: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 10,
  },
});
export default Home;
