import React from 'react';
import { Text } from 'react-native';
import { Icon, Header, Left, Right, Body } from 'native-base';

const AppHeader = ({ leftIconName, rightIconName, title }) => (
  <Header>
    <Left>
      <Icon
        type="FontAwesome"
        name={leftIconName}
        style={{ paddingLeft: 15 }}
      />
    </Left>
    <Body>
      <Text>{title}</Text>
    </Body>
    <Right>
      <Icon
        type="FontAwesome"
        name={rightIconName}
        style={{ paddingRight: 15 }}
      />
    </Right>
  </Header>
);

export default AppHeader;
