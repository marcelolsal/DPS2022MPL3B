/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react';
import { searchUser } from '../API';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import {user, userDetails} from './userBD';

const Login = () => {

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  function loginUser(login_username) {
    let userData = searchUser(login_username);
    console.log(userData)
    
    if (userData.username == username && userData.password == password) {
      navigation.navigate('Index2');
    }else {
      console.log('credenciales incorrectas.')
    }
  }

  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <Text style={styles.lema}>Inicia sesión para continuar</Text>
          <Text style={styles.lab}>Usuario:</Text>
          <TextInput
            value={username}
            onChangeText={(username) => {setUsername(username)}}
            placeholder="Ingrese su usuario"
            style={styles.datos}></TextInput>
          <Text style={styles.lab}>Contraseña:</Text>
          <TextInput
            value={password}
            onChangeText={(password) => {setPassword(password)}}
            secureTextEntry={true}
            placeholder="Ingrese la contraseña"
            style={styles.datos}></TextInput>

          <Button
            onPress={loginUser(username)}
            title="Iniciar Sesión"
            color={'#5F6E72'}></Button>
          <Text
            style={styles.remind}
            onPress={() => {
              navigation.navigate('Recuperacion de contraseña');
            }}>
            ¿Has olviddado la contraseña?
          </Text>
          <Button
            title={'Inicie sesion con Google'}
            onPress={() => {
              GoogleSignin.configure({
                androidClientId: 'ADD_YOUR_ANDROID_CLIENT_ID_HERE',
                iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
              });

              GoogleSignin.hasPlayServices()
                .then(hasPlayService => {
                  if (hasPlayService) {
                    GoogleSignin.signIn()
                      .then(userInfo => {
                        navigation.navigate('Index');
                        console.log(JSON.stringify(userInfo));
                      })
                      .catch(e => {
                        console.log('ERROR IS: ' + JSON.stringify(e));
                      });
                  }
                })
                .catch(e => {
                  console.log('ERROR IS: ' + JSON.stringify(e));
                });
            }}
          />
          
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  remind: {
    margin: 10,
    textAlign: 'center',
  },
  boton: {
    height: 500,
  },
  lab: {
    color: 'black',
    fontSize: 15,
    marginBottom: 10,
  },
  errors: {
    textAlign: 'center',
    color: 'red',
    padding: 20,
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
    fontSize: 22,
    color: 'black',
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
export default Login;
