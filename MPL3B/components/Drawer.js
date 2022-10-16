import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Splash from "../views/Splash";

const Drawer = createDrawerNavigator();

const Menu = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Test" component={Splash} />
        </Drawer.Navigator>
    );
}

export default Menu;