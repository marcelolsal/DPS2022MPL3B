/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Vistas/Login';
import RecupeContra from './Vistas/RecuperacionContra'; 

AppRegistry.registerComponent(appName, () => RecupeContra);
