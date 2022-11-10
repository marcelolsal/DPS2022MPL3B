/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry, AppState} from 'react-native';
import App from './App';
import isPermitted from './views/Archivos';
import DropdownComponent from './views/EstadoCitas';
import testGrid from './views/catalogoExamenes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => isPermitted);

