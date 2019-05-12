import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

const LikesTab = () => (
  <View>
    <Text>likes tab</Text>
  </View>
);

LikesTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon type="FontAwesome" name="heart" style={{ color: tintColor }} />
  ),
};

export default LikesTab;
