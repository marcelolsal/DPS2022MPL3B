import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Navegacion from './Navegacion/Navegacion';

export default function App() {
  return (
    <NavigationContainer>
      <Navegacion />
    </NavigationContainer>
  );
}
