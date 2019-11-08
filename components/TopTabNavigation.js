import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import SignUp from './SignUp';

const TabScreen = createMaterialTopTabNavigator(
  {
    'SIGN IN': {screen: Login},
    'SIGN UP': {screen: SignUp},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#094276',
      inactiveTintColor: '#99cccc',
      style: {
        backgroundColor: '#fbf7f5',
        elevation: 2,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#a8d3ee',
        borderBottomWidth: 2,
      },
    },
  },
);

const TopTapNavigation = createAppContainer(
  createStackNavigator({
    TabScreen: {
      screen: TabScreen,
      navigationOptions: {
        header: null,
      },
    },
  }),
);

export default TopTapNavigation;
