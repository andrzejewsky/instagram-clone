import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

const SearchTab = () => (
  <View>
    <Text>search tab</Text>
  </View>
);

SearchTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon type="FontAwesome" name="search" style={{ color: tintColor }} />
  ),
};

export default SearchTab;
