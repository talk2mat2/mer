import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Cards = ({title, children}) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.footer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    paddingTop: 9,
    fontSize: 13,
  },
  footer: {
    height: 35,
    backgroundColor: '#164f36',
    marginTop: 'auto',
    width:"100%",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  container: {
    width: '45%',
    alignItems:"center",
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    margin: 7,
    marginBottom: 8,
    elevation: 3,
    zIndex: 3,
    borderRadius: 20,
  },
  logo: {
    height: 40,
    width: 100,
  },
});
export default Cards;
