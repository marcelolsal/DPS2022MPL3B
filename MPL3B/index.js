/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './Vistas/Login';
import {name as appName} from './app.json';
import RecupeContra from './Vistas/RecuperacionContra';

AppRegistry.registerComponent(appName, () => Login);
