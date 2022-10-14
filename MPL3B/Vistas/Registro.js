/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default function Registro(){
 return (
  <View style={styles.container}>
        <Text>ESTAMO EN REGISTRO</Text>
      </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
