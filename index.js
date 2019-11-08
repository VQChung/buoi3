/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Main from './components/Main';
import {name as appName} from './app.json';
import FlatListDemo from './components/FlatListDemo';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
    },
  },
  FlatListDemo: {
    screen: FlatListDemo,
    navigationOptions: {
      header: null,
    },
  },
  initialRouteName: 'Main',
});
AppRegistry.registerComponent(appName, () => createAppContainer(MainNavigator));
