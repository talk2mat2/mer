import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Cards from '../components/cards';
import Header from '../components/header';
import Entype from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderNav from '../components/headernav';
import api from '../../api';

const Signup = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = React.useState({
    email: '',
    password: '',
    password2: '',
    firstName: '',
    lastName: '',
    errormessage: '',
    Gender: '',
    newsLetter: false,
  });

  const data = {
    Email: state.email?.toLocaleLowerCase(),
    Password: state.password,
    Password2: state.password2,
    firstName: state.firstName,
    lastName: state.lastName,
    Gender: 'Male',
  };

  const handleChange = (key, text) => {
    setState({...state, [key]: text});
  };
  const HandleSignUp = async () => {
    if (!state.email || !state.firstName || !state.password) {
      setLoading(false);
      return alert('All fields are required');
    } else {
      setLoading(true);
      await api
        .Regiter(data)
        .then(res => {
          setLoading(false);
          console.log(res);
          alert(res?.message);
        })
        .catch(err => {
          setLoading(false);
          if (err.response) {
            alert(err.response.data.message);
            console.log(err);
          }
        });
    }
  };
  return (
    <View style={styles.container}>
      <HeaderNav title="Register" navigation={navigation} />
      <View style={styles.body}>
        {loading && (
          <View
            style={{
              position: 'absolute',
              top: '40%',
              zIndex: 4,
              left: '50%',
              right: '50%',
              elevation: 4,
              alignItems: 'center',
            }}>
            <ActivityIndicator size={100} />
          </View>
        )}
        <View style={{}}>
          <Text style={styles.headerTxt}>Register</Text>
        </View>
        <ScrollView>
          <View style={{marginTop: 20, marginBottom: 80}}>
            <TextInput
              onChangeText={text => handleChange('email', text)}
              value={state.email}
              placeholder="email"
              style={styles.input}
            />
            <TextInput
              onChangeText={text => handleChange('password', text)}
              value={state.password}
              secureTextEntry={true}
              autoCapitalize={false}
              placeholder="Password"
              style={styles.input}
            />
            <TextInput
              secureTextEntry={true}
              autoCapitalize={false}
              onChangeText={text => handleChange('password2', text)}
              value={state.password2}
              placeholder="Verify Password"
              style={styles.input}
            />
            <TextInput
              onChangeText={text => handleChange('firstName', text)}
              value={state.firstName}
              placeholder="First name"
              style={styles.input}
            />
            <TextInput
              onChangeText={text => handleChange('lastName', text)}
              value={state.lastName}
              placeholder="Last Name"
              style={styles.input}
            />
            <TouchableOpacity onPress={HandleSignUp} style={{marginTop: 40}}>
              <View style={styles.btn}>
                <Text style={styles.title}>Done</Text>
              </View>
            </TouchableOpacity>
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('login')}>
                <Text style={{fontSize: 17, lineHeight: 30, color: 'grey'}}>
                  Already have an account
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </View>
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

    color: '#164f36',
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
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
export default Signup;
