import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon, Button } from 'native-base';
import Statistics from './Statistics';

const ProfileHeader = ({ profilePic, nickname, children, statistics }) => (
  <View>
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 10,
        paddingHorizontal: 10,
      }}
    >
      <Image
        source={profilePic}
        style={{ width: 75, height: 75, borderRadius: 40 }}
      />
      <View style={{ flex: 1, paddingLeft: 25, justifyContent: 'center' }}>
        <Statistics {...statistics} />
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <Button
            style={{
              flex: 1,
              justifyContent: 'center',
              height: 30,
              marginRight: 10,
            }}
            bordered
            dark
          >
            <Text>Edit profile</Text>
          </Button>
          <Button
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              width: 45,
            }}
            bordered
            dark
          >
            <Icon type="FontAwesome" name="cog" style={{ fontSize: 15 }} />
          </Button>
        </View>
      </View>
    </View>
    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <Text style={{ fontWeight: 'bold' }}>{nickname}</Text>
      {children}
    </View>
  </View>
);

export default ProfileHeader;
