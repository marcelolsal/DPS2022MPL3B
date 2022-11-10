/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={[styles.contenedor, {flexDirection: 'column'}]}>
        <View style={styles.caja2}>
          <Image
            style={styles.img1}
            source={require('../recursos/perfil.png')}
          />
        </View>

        <View style={styles.caja3}/>
        <Text style={{fontSize: 18, paddingLeft: 50, padding: 2}}>
          Informacion Personal
        </Text>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../recursos/edit.png')} />
        </TouchableOpacity>
        <View style={styles.caja4}>
          <Text style={{fontSize: 16, padding: 4}}>Nombre Completo: Mariella Chicas</Text>
          <Text style={{fontSize: 16, padding: 4}}>Edad: 23</Text>
          <Text style={{fontSize: 16, padding: 4}}>Genero: Femenino</Text>
          <Text style={{fontSize: 16, padding: 4}}>Fecha de Nacimiento: 14-02-2000</Text>
          <Text style={{fontSize: 16, padding: 4}}>Numero de telefono: 2225-5696</Text>
          <Text style={{fontSize: 16, padding: 4}}>Correo Electronico: Mariella Chicas</Text>
          <Text></Text>
        </View>

        <View style={styles.caja5}>
          <Text style={{fontSize: 15, textAlign: 'center', marginVertical: 90}}>
            Derechos reservados
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#b5c8cd',
    padding: 4,
    marginVertical: 1,
  },

  caja: {
    marginVertical: 10,
    flexDirection: 'row',
  },

  caja1: {
    padding: 1,
    backgroundColor: 'white',
  },

  caja2: {
    left: 130,
  },

  nombre: {
    padding: 20,
    right: 8,
  },

  caja3: {
    margin: 9,
    padding: 1,
    backgroundColor: 'white',
  },

  caja4: {
    Height: 20,
    padding: 10,
  },

  caja5: {
    marginVertical: 150,
    padding: 10,
  },

  notificacion: {
    right: '1%',
    paddingLeft: 295,
  },
  img: {
    resizeMode: 'cover',
    width: '5%',
    height: 20,
    right: '1%',
    marginLeft: 350,
    marginVertical: -22,
  },
  img1: {
    width: '50%',
    height: 200,
    marginLeft: -25,
  },
});
export default App;
