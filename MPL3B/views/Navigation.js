/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Splash from './Splash';
import Index from './Index';
import Recuperacion from './RecuperacionContra';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Recuperacion" component={Recuperacion} />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;
