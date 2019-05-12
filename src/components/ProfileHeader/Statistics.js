import React from 'react';
import { View, Text } from 'react-native';

const Statistics = ({ posts, followers, following }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
    }}
  >
    <View style={{ alignItems: 'center' }}>
      <Text>{posts}</Text>
      <Text style={{ fontSize: 10, color: 'grey' }}>posts</Text>
    </View>
    <View style={{ alignItems: 'center' }}>
      <Text>{followers}</Text>
      <Text style={{ fontSize: 10, color: 'grey' }}>followers</Text>
    </View>
    <View style={{ alignItems: 'center' }}>
      <Text>{following}</Text>
      <Text style={{ fontSize: 10, color: 'grey' }}>following</Text>
    </View>
  </View>
);

export default Statistics;
