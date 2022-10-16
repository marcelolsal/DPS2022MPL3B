/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const RecupeContra = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}>
          <Text style={styles.title}>¿Has olvidado tu contraseña?</Text>
          <Text style={styles.lab}>Usuario o Correo</Text>
          <TextInput style={styles.datos}></TextInput>
          <Button
            style={styles.boton}
            title="Recuperar"
            color={'#5F6E72'}></Button>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  boton: {
    height: 500,
  },
  lab: {
    color: 'black',
    fontSize: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
    marginTop: 50,
    marginBottom: 20,
  },
  datos: {
    borderWidth: 1,
    marginBottom: 30,
  },
  lema: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
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
export default RecupeContra;
