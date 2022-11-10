/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, StyleSheet, Image, Button} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {user, userDetails} from './userBD';

const Login = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: formValue => {
      const {username, password} = formValue;
      if (username !== user.username || password !== user.password) {
        console.log('Error');
      } else {
        console.log('Login correcto');
        navigation.navigate('Index2');
      }
    },
  });

  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <Text style={styles.lema}>Inicia sesión para continuar</Text>
          <Text style={styles.lema2}>Si no tienes cuenta haz clic <Text style={styles.lema3} onPress={() => {
              navigation.navigate('Registro');
            }}>Aqui </Text></Text>
          <Text style={styles.lab}>Usuario:</Text>
          <TextInput
            value={formik.values.username}
            onChangeText={text => formik.setFieldValue('username', text)}
            placeholder="Ingrese su usuario"
            style={styles.datos}></TextInput>
          <Text style={styles.lab}>Contraseña:</Text>
          <TextInput
            value={formik.values.password}
            secureTextEntry={true}
            onChangeText={text => formik.setFieldValue('password', text)}
            placeholder="Ingrese la contraseña"
            style={styles.datos}></TextInput>

          <Button
            onPress={formik.handleSubmit}
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
          <Text style={styles.errors}>{formik.errors.username}</Text>
          <Text style={styles.errors}>{formik.errors.password}</Text>
        </View>
      </View>
    </>
  );
};

function validationSchema() {
  return {
    username: Yup.string().required('El usuario es Obligatorio'),
    password: Yup.string().required('El pasword es Obligatorio'),
  };
}

function initialValues() {
  return {
    username: '',
    password: '',
  };
}

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
  lema2: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  lema3: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
    color: 'blue',
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
