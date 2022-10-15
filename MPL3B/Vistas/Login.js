import React from 'react';
import { View, Text,TextInput, StyleSheet, Image, Button} from 'react-native';



const Login = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}>
          <Text style={styles.title}>Iniciar Sesión</Text>
         <Text style={styles.lema}>Inicia sesión para continuar</Text>
          <Text style={styles.lab}>Usuario:</Text>   
          <TextInput style={styles.datos}></TextInput>  
          <Text style={styles.lab}>Contraseña:</Text>   
          <TextInput style={styles.datos}></TextInput>       
          <Button style={styles.boton} title="Iniciar Sesión" color={'#5F6E72'}></Button>
        <Text style={styles.remind}>¿Has olviddado la contraseña?</Text>
       
        <Button title={'Sign in with Google'} onPress={() =>  {
    GoogleSignin.configure({
        androidClientId: 'ADD_YOUR_ANDROID_CLIENT_ID_HERE',
        iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
    });
         GoogleSignin.hasPlayServices().then((hasPlayService) => {
        if (hasPlayService) {
             GoogleSignin.signIn().then((userInfo) => {
                       console.log(JSON.stringify(userInfo))
             }).catch((e) => {
             console.log("ERROR IS: " + JSON.stringify(e));
             })
        }
}).catch((e) => {
    console.log("ERROR IS: " + JSON.stringify(e));
})
}} />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
    remind:{
        margin: 10,
        textAlign: 'center'
    }, 
  boton:{
   height:500
  },
  lab:{
    color: 'black',
    fontSize: 15,
    marginBottom:10
  },
  title:{
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
    marginTop: 50,
    marginBottom: 20
  },
  datos:{
  borderWidth:1,
  marginBottom:30,
  },
  lema:{
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black'
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

