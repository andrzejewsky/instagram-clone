import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Icon, Thumbnail } from 'native-base';

const Stories = ({ items }) => (
  <View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Stories</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          type="FontAwesome"
          name="play"
          style={{ fontSize: 11, marginRight: 5 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Watch all</Text>
      </View>
    </View>
    <View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {items.map(story => (
          <View key={story.id} styles={{ alignItems: 'center' }}>
            <Thumbnail
              source={story.picture}
              style={{
                marginHorizontal: 5,
                borderColor: 'pink',
                borderWidth: 2,
              }}
            />
            <Text style={{ fontSize: 10, textAlign: 'center' }}>{story.author}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default Stories;
