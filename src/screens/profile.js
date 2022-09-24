import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Cards from '../components/cards';
import Header from '../components/header';
import Entype from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderNav from '../components/headernav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {UserContext} from '../context';

const Profile = ({navigation}) => {
  const {setIslogged, setUser, isLogged, user} = useContext(UserContext);

  handleLogout = () => {
    setUser(false);
    setIslogged(false);
  };

  return (
    <View style={styles.container}>
      <HeaderNav navigation={navigation} title="Profile" />
      <ScrollView>
        <View style={styles.body}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.headerTxt}>Profile</Text>
            <Icon name="account-circle" size={120} />
          </View>
          <View style={{marginTop: 10}}>
            <View style={styles.input}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.name}>
                {user?.userdata?.firstName} {user?.userdata?.lastName}
              </Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.name}>Email</Text>
              <Text style={styles.name}>{user?.userdata?.Email}</Text>
            </View>
           
            <View style={styles.input}>
              <Text style={styles.name}>Gender</Text>
              <Text style={styles.name}>--</Text>
            </View>

            <TouchableOpacity onPress={handleLogout} style={{marginTop: 40}}>
              <View style={styles.btn}>
                <Text style={styles.title}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontFamily: 'Poppins-Light',
    textAlign: 'center',

    fontSize: 20,
  },
  name: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
  },
  btn: {
    backgroundColor: '#164f36',
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 30,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    color: '#164f36',
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#f2f2f2',
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

   
  },
  body: {
    marginTop: '10%',
    paddingHorizontal: 25,
  },
});
export default Profile;
