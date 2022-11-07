import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Noticias from '../views/Noticias';
import CatalogoExamenes from '../views/catalogoExamenes';
import tablaCitas from '../views/tablaCitas';
const Drawer = createDrawerNavigator();

const Menu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Noticias} />
      <Drawer.Screen name="Examenes" component={CatalogoExamenes} />
      <Drawer.Screen name="Citas" component={tablaCitas} />
    </Drawer.Navigator>
  );
};

export default Menu;
