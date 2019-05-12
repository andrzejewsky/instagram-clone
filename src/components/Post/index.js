import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Button,
  Icon,
} from 'native-base';
import LikeHeart from './../LikeHeart';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: props.likes,
    };
  }

  handleLike = () => {
    this.setState(state => ({ likes: state.likes + 1 }));
  };

  render() {
    const {
      author,
      profilePic,
      date,
      image,
      content,
      likes,
      comments,
    } = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={profilePic} />
            <Body>
              <Text>{author}</Text>
              <Text>{date}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <LikeHeart onLike={this.handleLike}>
            <Image
              source={image}
              style={{
                height: 200,
                flex: 1,
              }}
            />
          </LikeHeart>
        </CardItem>
        <CardItem style={{ height: 35 }}>
          <Left>
            <Button transparent>
              <Icon
                type="FontAwesome"
                name="heart"
                style={{ color: this.state.likes > this.props.likes ? 'red' : 'black' }}
              />
            </Button>
            <Button transparent>
              <Icon
                type="FontAwesome"
                name="comments"
                style={{ color: 'black' }}
              />
            </Button>
            <Button transparent>
              <Icon
                type="FontAwesome"
                name="paper-plane"
                style={{ color: 'black' }}
              />
            </Button>
          </Left>
        </CardItem>
        <CardItem>
          <Text style={{ paddingRight: 10 }}>{this.state.likes} likes</Text>
          <Text>{comments} comments</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: '900' }}>{author}</Text> {content}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default Post;
