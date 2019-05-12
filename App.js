import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './src/views/Main';

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
  },
});

export default createAppContainer(AppNavigator);
