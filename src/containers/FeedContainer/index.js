import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import Post from './../../components/Post';
import Stories from './../../components/Stories';
import fetchData from './../../../fetchData';

class FeedContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      feed: [],
      stories: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  handleLoading = () => {
    this.setState({ loading: true });
    this.loadData();
  };

  loadData = () => {
    fetchData().then(({ feed, stories }) => {
      this.setState({ feed, stories, loading: false });
    });
  };

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.loading}
            onRefresh={this.handleLoading}
          />
        }
      >
        <Stories items={this.state.stories} />
        {this.state.feed.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </ScrollView>
    );
  }
}

export default FeedContainer;
