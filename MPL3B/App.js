import React from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './views/Navigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
};

export default App;
