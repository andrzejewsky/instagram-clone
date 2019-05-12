import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Container, Content } from 'native-base';
import AppHeader from './../../../components/AppHeader';
import IconTabs from './../../../components/IconTabs';
import ProfileHeader from './../../../components/ProfileHeader';
import GridView from './GridView';
import ListView from './ListView';
import { profile } from './../../../../data';

class ProfileTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
    };
  }

  changeActiveTab = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    return (
      <Container>
        <AppHeader
          leftIconName="user-plus"
          title={profile.nickname}
          rightIconName="history"
        />
        <Content>
          <ProfileHeader
            profilePic={profile.avatar}
            nickname={profile.nickname}
            statistics={{
              posts: profile.posts,
              followers: profile.followers,
              following: profile.following,
            }}
          >
            <Text>{profile.description}</Text>
          </ProfileHeader>
          <IconTabs>
            <IconTabs.TabItem iconName="th">
              <GridView posts={profile.feed} />
            </IconTabs.TabItem>
            <IconTabs.TabItem iconName="list">
              <ListView posts={profile.feed} />
            </IconTabs.TabItem>
            <IconTabs.TabItem iconName="id-card">
              <View>
                <Text>third</Text>
              </View>
            </IconTabs.TabItem>
            <IconTabs.TabItem iconName="bookmark">
              <View>
                <Text>fourth</Text>
              </View>
            </IconTabs.TabItem>
          </IconTabs>
        </Content>
      </Container>
    );
  }
}

ProfileTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon type="FontAwesome" name="user" style={{ color: tintColor }} />
  ),
};

export default ProfileTab;
