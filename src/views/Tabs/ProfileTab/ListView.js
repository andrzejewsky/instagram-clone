import React from 'react';
import { View } from 'react-native';
import Post from './../../../components/Post';

const ListView = ({ posts }) => (
  <View>
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </View>
);

export default ListView;
