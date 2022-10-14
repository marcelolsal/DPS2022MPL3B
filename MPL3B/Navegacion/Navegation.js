/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Registro from '../Vistas/Registro';
import Login from '../Vistas/Login';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="registro" component={Registro} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
