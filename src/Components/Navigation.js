import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../Pages/Home/Container';
import Rating from '../Pages/Rating/Container';

const App = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Rating: {
    screen: Rating,
    navigationOptions: {
      drawerLabel: 'Rating',
    },
  },
});

export default createAppContainer(App);
