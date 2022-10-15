/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import 'react-native-gesture-handler';

const Carga = ({navegacion}) => {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}>
          <Image
            style={styles.formatologo}
            source={require('./recursos/Logo_S_fondo.png')}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  formatologo: {
    width: '100%',
    height: 175,
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
export default Carga;
