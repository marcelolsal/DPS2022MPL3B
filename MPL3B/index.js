/* eslint-disable prettier/prettier */
/**
 * @format
 */

import { TabActions } from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import tablaCitas from './views/tablaCitas';

AppRegistry.registerComponent(appName, () => tablaCitas);
