/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigation from './views/Navigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigation></Navigation>
      </NavigationContainer>
    </>
  );
};

export default App;
