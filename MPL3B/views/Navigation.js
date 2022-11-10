/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Splash from './Splash';
import Index from './Index';
import Index2 from './Index2';
import Recuperacion from './RecuperacionContra';
import Registro from './Registro';
import EstadoAdmin from './EstadoCitas';
import Archivo from './Archivos';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen  name="Registro" component={Registro} />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="Index" component={Index} />
        <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="Index2" component={Index2} />
        <Stack.Screen name="Recuperacion de contraseña" component={Recuperacion} />
        <Stack.Screen name="Estado de Citas" component={EstadoAdmin} />
        <Stack.Screen name="Archivos" component={Archivo} />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;
