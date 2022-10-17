import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Noticias from "../views/Noticias";
import CatalogoExamenes from "../views/CatalogoExamenes";
import Citas from "../views/TablaCitas";
import Login from "../views/Login";
import Perfil from "../views/Perfil";
import { Button } from "react-native";

const Drawer = createDrawerNavigator();

const Menu = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Noticias} />
            <Drawer.Screen name="Examenes" component={CatalogoExamenes} />
            <Drawer.Screen name="Citas" component={Citas} />
        </Drawer.Navigator>
    );
}

export default Menu;