import React, { useContext } from 'react';
import Profile from './profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Landing from './landing';
import { UserContext } from '../context';
const Stack = createNativeStackNavigator();
const MainNav = () => {
  const {setIslogged, setUser, isLogged} = useContext(UserContext);
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="home"
          component={Landing}
        />
        {isLogged && (
          <Stack.Screen
            screenOptions={{
              headerShown: false,
            }}
            name="Profile"
            component={Profile}
          />
        )}

        {!isLogged && (
          <Stack.Screen
            screenOptions={{
              headerShown: false,
            }}
            name="login"
            component={Login}
          />
        )}

        {!isLogged && (
          <Stack.Screen
            screenOptions={{
              headerShown: false,
            }}
            name="Signup"
            component={Signup}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
