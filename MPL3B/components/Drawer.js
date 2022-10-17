import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Splash from "../views/Splash";
import CatalogoExamenes from "../views/catalogoExamenes";
import Citas from "../views/tablaCitas";
import Perfil from "../views/Perfil";

const Drawer = createDrawerNavigator();

const Menu = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Splash} />
            <Drawer.Screen name="Examenes" component={CatalogoExamenes} />
            <Drawer.Screen name="Citas" component={Citas} />
        </Drawer.Navigator>
    );
}

export default Menu;