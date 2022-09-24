import React, { useContext } from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserContext } from '../context';

const Header = ({navigationn}) => {
    const {setIslogged, setUser, isLogged} = useContext(UserContext);
    const handlepress=()=>{
       isLogged&& navigationn.navigate('Profile')
       !isLogged&& navigationn.navigate('login')
    }
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/images/me.png')}
      />
      <TouchableOpacity onPress={handlepress}>
        <Icon name="account-circle" size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 25,
    height: 60,
    elevation: 4,
    zIndex: 4,
  },
  logo: {
    height: 40,
    width: 100,
  },
});
export default Header;
