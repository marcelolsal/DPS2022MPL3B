/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { View, StyleSheet, Image, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.contenedor}>
          <View style={styles.caja1}>
            <Image
                style={styles.formatologo}
                source={require('../recursos/Logo_S_fondo.png')}
            />
            <Button title="COMENZAR" color={'#5F6E72'} onPress={() => navigation.navigate('Login')}></Button>
          </View>
      </View> 
    </>
  );
};

const styles = StyleSheet.create({
  formatologo: {
    width: '100%',
    height: 170,
    marginVertical: 100,
  },
  contenedor: {
    backgroundColor: '#14CE90',
    flex: 1,
    flexDirection: 'column',
  },
  caja1: {
    padding: 40,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    flex: 1,
  },
});