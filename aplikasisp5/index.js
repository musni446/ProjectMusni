/**
 * @format
 */

import React, {Component} from 'react' ;
import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import BasicFlatListData from './Component/BasicFlatListData';

AppRegistry.registerComponent(appName, () => BasicFlatListData);