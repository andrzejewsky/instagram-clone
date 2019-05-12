import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const GridView = ({ posts }) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: -1 }}>
    {posts.map((post, index) => (
      <View
        key={index}
        style={{ width: width / 3, height: width / 3, padding: 1 }}
      >
        <Image
          style={{ flex: 1, width: undefined, height: undefined }}
          source={post.image}
        />
      </View>
    ))}
  </View>
);

export default GridView;
