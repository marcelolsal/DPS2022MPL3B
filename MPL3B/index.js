/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './Vistas/Login';
import ImportarContra from './Vistas/RecuperacionContra';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
