import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

const PostTab = () => (
  <View>
    <Text>post tab</Text>
  </View>
);

PostTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon type="FontAwesome" name="plus-square" style={{ color: tintColor }} />
  ),
};

export default PostTab;
