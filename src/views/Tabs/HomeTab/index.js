import React from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';
import AppHeader from './../../../components/AppHeader';
import FeedContainer from './../../../containers/FeedContainer';

const HomeTab = () => (
  <View>
    <AppHeader
      leftIconName="camera"
      title="Instagram"
      rightIconName="paper-plane"
    />
    <FeedContainer />
  </View>
);

HomeTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon type="FontAwesome" name="home" style={{ color: tintColor }} />
  ),
};

export default HomeTab;
