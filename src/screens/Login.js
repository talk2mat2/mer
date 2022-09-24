import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import Cards from '../components/cards';
import Header from '../components/header';
import Entype from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderNav from '../components/headernav';
import api from '../../api';
import {UserContext} from '../context';

const Login = ({navigation}) => {
  const {setIslogged, setUser} = useContext(UserContext);
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const data = {
    Email: state.email.toLowerCase(),
    Password: state.password,
  };
  const handleChange = (key, text) => {
    setState({...state, [key]: text});
  };

  const HandlekLogin = async () => {
    if (!state.email || !state.password) {
      setLoading(false);
      return alert('All fields are required');
    } else {
      setLoading(true);
      await api
        .login(data)
        .then(res => {
          setLoading(false);
          setIslogged(true);
          setUser(res);
          console.log(res);
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
          if (err.response) {
            alert(err.response.data?.message);
            console.log(err);
          }
        });
    }
  };
  return (
    <View style={styles.container}>
      <HeaderNav navigation={navigation} title="Sign In" />
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
      <View style={styles.body}>
        <View style={{}}>
          <Text style={styles.headerTxt}>Sign in</Text>
          <Text style={{fontSize: 15, lineHeight: 30, color: 'grey'}}>
            Welcome to meritstem
          </Text>
        </View>
        <View style={{marginTop: 40}}>
          <TextInput
            autoCapitalize={false}
            onChangeText={text => handleChange('email', text)}
            placeholder="email"
            style={styles.input}
          />
          <TextInput
            autoCapitalize={false}
            secureTextEntry={true}
            onChangeText={text => handleChange('password', text)}
            placeholder="Password"
            style={styles.input}
          />
          <TouchableOpacity onPress={HandlekLogin}>
            <View style={styles.btn}>
              <Text style={styles.title}>Done</Text>
            </View>
          </TouchableOpacity>
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signup')}>
              <Text style={{fontSize: 17, lineHeight: 30, color: 'grey'}}>
                Dont Have account
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
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
    marginVertical: 20,
    paddingHorizontal: 10,
    borderColor: '#AADFAD',
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
export default Login;
