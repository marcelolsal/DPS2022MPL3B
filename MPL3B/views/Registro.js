/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text,Button, TextInput,ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Registro = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.contenedor}>
        <View style={styles.caja1}>
<Text style={styles.title}>Crear una cuenta nueva</Text>
<Text style={styles.subtitle} >¿Ya te has Registrado?</Text><Text style={styles.subtitle2} onPress={() => {
              navigation.navigate('Login');
            }}>
  Ingresa aqui para iniciar sesion
</Text>
<Text>
  Nombres:
</Text>
<TextInput style={styles.borderinput}> </TextInput>

<Text>
  Apellidos:
</Text>
<TextInput style={styles.borderinput}> </TextInput>

<Text>
  Correo:
</Text>
<TextInput style={styles.borderinput}> </TextInput>

<Text>
  Usuario:
</Text>
<TextInput style={styles.borderinput}> </TextInput>

<Text>
  Documento de Identidad (opcional):
</Text>
<TextInput style={styles.borderinput}> </TextInput>

<Text>
  Contraseña:
</Text>
<TextInput style={styles.borderinput}> </TextInput>

<Text>
  Numero de Telefono:
</Text>
<TextInput style={styles.borderinput}> </TextInput>

<Text>
  Genero:
</Text>
<TextInput style={styles.borderinput}> </TextInput>

<Text>
  Fecha de Nacimiento:
</Text>
<TextInput style={styles.borderinput}> </TextInput>

<Button
            title="REGISTRAR"
            color={'#5F6E72'}
            onPress={() => navigation.navigate('Login')}
          />

        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
borderinput:{
borderWidth:1,
marginTop: 10,
marginVertical:10,
},
title:{
  fontSize: 40,
 color: 'black',
 textAlign: 'center',
},
subtitle:{
  fontSize: 15,
  textAlign: 'center',
},
subtitle2:{
  fontSize: 15,
  textAlign: 'center',
  color: 'blue',
},
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
export default Registro;
