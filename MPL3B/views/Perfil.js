/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View>
      <View style={[styles.contenedor, {flexDirection: 'column'}]}>
        <View style={styles.caja}>
          <Icon name="home" size={40} color="black" />
          <Icon
            name="notifications"
            style={styles.notificacion}
            size={30}
            color="black"
          />
        </View>

        <View style={styles.caja2}>
          <Image
            style={{width: 150, height: 150, borderRadius: 80}}
          />

          <View style={styles.nombre}>
            <Text style={{fontSize: 20}}>Hi! Mariella Chicas</Text>
            <Text style={{fontSize: 18, paddingLeft: 10}}>Editar Perfil</Text>
          </View>
        </View>

        <View style={styles.caja3}></View>

        <View style={styles.caja4}>
          <Text style={{fontSize: 18, paddingLeft: 100, padding: 2}}>
            Informacion Personal
          </Text>
          <Text></Text>
          <Text style={{fontSize: 16, padding: 4}}>Nombre Completo:</Text>
          <Text style={{fontSize: 16, padding: 4}}>Edad:</Text>
          <Text style={{fontSize: 16, padding: 4}}>Genero:</Text>
          <Text style={{fontSize: 16, padding: 4}}>Fecha de Nacimiento:</Text>
          <Text style={{fontSize: 16, padding: 4}}>Numero de telefono:</Text>
          <Text style={{fontSize: 16, padding: 4}}>Correo Electronico:</Text>
          <Text></Text>
        </View>

        <View style={styles.caja5}>
          <Text style={{fontSize: 15, textAlign: 'center'}}>
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
    marginVertical: 35,
  },

  caja: {
    marginVertical: 10,
    minHeight: 15,
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
    marginVertical: 90,
    padding: 10,
  },

  notificacion: {
    right: '1%',
    paddingLeft: 295,
  },
});
export default App;
