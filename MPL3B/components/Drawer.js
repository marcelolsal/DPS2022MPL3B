import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from "../views/Perfil";

const Drawer = createDrawerNavigator();

const Menu = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Perfil de usuario" component={Perfil}/>
        </Drawer.Navigator>
    );
}

export default Menu;