import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderNav = ({title, navigation}) => {
  const handlebacks = () => {
    navigation && navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ paddingRight:20 }} onPress={handlebacks}>
        <Icon name="arrow-back" size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
  },
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
export default HeaderNav;
