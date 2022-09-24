import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Cards from '../components/cards';
import Header from '../components/header';
import Entype from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigationn={navigation} />
      <View style={styles.body}>
        <Text style={styles.headerTxt}>
          Stockbrokerage {'\n'}and securities trading
        </Text>
        <View
          style={{
            marginTop: '10%',
            flexDirection: 'row',
            flexWrap: 'wrap',

            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Cards title="Stocktrading">
            <View style={{marginTop: 'auto'}}>
              <Entype color="#AADFAD" name="bar-graph" size={100} />
            </View>
          </Cards>
          <Cards title="Meristem Business">
            <View style={{marginTop: 'auto'}}>
              <FontAwesome color="#AADFAD" name="group" size={80} />
            </View>
          </Cards>
          <Cards title="PortFolio Reconstruct">
            <View style={{marginTop: 'auto'}}>
              <FontAwesome color="#AADFAD" name="files-o" size={80} />
            </View>
          </Cards>
          <Cards title="Shares/Dividend Track.">
            <View style={{marginTop: 'auto'}}>
              <AntDesign color="#AADFAD" name="piechart" size={80} />
            </View>
          </Cards>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 30,
    fontFamily: 'Poppins-Light',

    color: '#164f36',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  
  },
  body: {
    marginTop: '15%',
    paddingHorizontal: 25,
  },
});
export default Landing;
