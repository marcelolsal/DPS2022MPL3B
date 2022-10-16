/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Splash from './views/Splash';
import Login from './Vistas/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Splash);
