/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from '../views/Registro';
import Login from '../views/Login';
import Carga from '../Vistas/Carga';

const Stack = createStackNavigator();
export default function Navegacion() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="carga" component={Carga} />
      <Stack.Screen name="registro" component={Registro} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}