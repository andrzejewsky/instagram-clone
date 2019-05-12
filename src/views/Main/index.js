import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import * as Tabs from './../Tabs';

const TabNavigator = createBottomTabNavigator(
  {
    ...Tabs,
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
    },
  }
);

TabNavigator.navigationOptions = {
  header: null,
};

export default TabNavigator;
