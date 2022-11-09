/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Noticias from '../views/Noticias';
import CatalogoExamenes from '../views/catalogoExamenes';
import tablaCitas from '../views/tablaCitas';
import Perfil from '../views/Perfil';
import CS from '../views/Login'
const Drawer = createDrawerNavigator();

const Menu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Noticias}/>
      <Drawer.Screen name="Catalogo de Examenes" component={CatalogoExamenes} />
      <Drawer.Screen name="Nueva Cita/Historial de Citas" component={tablaCitas} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="CS" component={CS} />
    </Drawer.Navigator>
  );
};

export default Menu;
