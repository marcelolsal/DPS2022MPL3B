import * as React from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Splash from './Splash';
import Index from './Index';
import Recuperacion from './RecuperacionContra';
import Registro from './Registro';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Registro" component={Registro} />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="Index" component={Index} />
        <Stack.Screen name="Recuperacion de contraseña" component={Recuperacion} />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;
