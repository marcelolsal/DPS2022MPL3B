/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Noticias from '../views/Noticias';
import CatalogoExamenes from '../views/catalogoExamenes';
import tablaCitas from '../views/tablaCitas';
import Archivo from '../views/Archivos';
import DropdownComponent from '../views/EstadoCitas';
import Perfil from '../views/Perfil';
import CS from '../views/Login';
import {StyleSheet, Text,TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';
import tablaCitas2 from '../views/CitasAdmin';
const Drawer2 = createDrawerNavigator();

const Menu = () => {
  return (
    <Drawer2.Navigator
    drawerContent={(props) => <MenuItems{ ...props }/>}>
      <Drawer2.Screen name="Inicio" component={Noticias}/>
      <Drawer2.Screen name="Catalogo de Examenes" component={CatalogoExamenes} />
      <Drawer2.Screen name="Historial de Citas" component={tablaCitas2} />
      <Drawer2.Screen name="Perfil" component={Perfil} />
      <Drawer2.Screen  options={{ headerShown:false }} name="CS" component={CS} />
    </Drawer2.Navigator>
  );
};

const MenuItems = ({navigation})=>{
return (
 <DrawerContentScrollView style={styles.container}>
  <Text style={styles.title}>Menu</Text>
  <TouchableOpacity
  style={styles.button2}
  onPress={() => navigation.navigate('Inicio')}>
  <Text style={styles.text1}>Inicio</Text>
  </TouchableOpacity>
  <TouchableOpacity
  style={styles.button3}
  onPress={() => navigation.navigate('Catalogo de Examenes')}>
  <Text style={styles.text1}>Catalogo Examenes</Text>
  </TouchableOpacity>
  <TouchableOpacity
  style={styles.button3}
  onPress={() => navigation.navigate('Historial de Citas')}>
  <Text style={styles.text1}>Historial de Citas</Text>
  </TouchableOpacity>
  <TouchableOpacity
  style={styles.button3}
  onPress={() => navigation.navigate('Perfil')}>
  <Text style={styles.text1}>Perfil de usuario</Text>
  </TouchableOpacity>

  <TouchableOpacity
  style={styles.button4}
  onPress={() => RNRestart.Restart()}>
  <Text style={styles.text2}>Cerrar Sesion</Text>
  </TouchableOpacity>
 </DrawerContentScrollView>
);
};
const styles = StyleSheet.create({
container:{
padding:15,
},
text2:{
  color:'#FFF',
  },
title:{
fontSize:20,
fontWeight: 'bold',
backgroundColor:'#',
},
button2: {
  margin:0,
  marginTop:50,
  marginRight:0,
  marginLeft:0,
  alignItems: 'center',
  backgroundColor: '#B2D9B2',
  padding: 10,
  borderRadius: 25,
},
button3: {
  margin:0,
  marginTop:20,
  marginRight:0,
  marginLeft:0,
  alignItems: 'center',
  backgroundColor: '#B2D9B2',
  padding: 10,
  borderRadius: 25,
},
button4: {
  margin:0,
  marginTop:280,
  marginRight:0,
  marginLeft:0,
  alignItems: 'center',
  backgroundColor: '#DE4B3D',
  padding: 10,
  borderRadius: 25,
},
});
export default Menu;
