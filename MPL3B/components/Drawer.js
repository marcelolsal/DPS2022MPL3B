/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Noticias from '../views/Noticias';
import CatalogoExamenes from '../views/catalogoExamenes';
import tablaCitas from '../views/tablaCitas';
import Perfil from '../views/Perfil';
import CS from '../views/Login';
import {StyleSheet, Text,TouchableOpacity} from 'react-native';
const Drawer = createDrawerNavigator();

const Menu = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuItems{ ...props }/>}>
      <Drawer.Screen name="Inicio" component={Noticias}/>
      <Drawer.Screen name="Catalogo de Examenes" component={CatalogoExamenes} />
      <Drawer.Screen name="Nueva Cita/Historial de Citas" component={tablaCitas} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen  options={{ headerShown:false }} name="CS" component={CS} />
    </Drawer.Navigator>
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
  onPress={() => navigation.navigate('Nueva Cita/Historial de Citas')}>
  <Text style={styles.text1}>Nueva Cita/Historial de Citas</Text>
  </TouchableOpacity>
  <TouchableOpacity
  style={styles.button3}
  onPress={() => navigation.navigate('Perfil')}>
  <Text style={styles.text1}>Perfil de usuario</Text>
  </TouchableOpacity>

  <TouchableOpacity
  style={styles.button4}
  onPress={() => navigation.navigate('CS')}>
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
