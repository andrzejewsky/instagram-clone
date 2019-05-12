import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

class LikeHeart extends Component {
  constructor(props) {
    super(props);

    this.lastPress = 0;
    this.iconRef = React.createRef();
  }

  handlePress = () => {
    const time = new Date().getTime();
    const delta = time - this.lastPress;
    const doublePressDelay = 400;

    if (delta < doublePressDelay) {
      this.props.onLike();
      this.iconRef.current
        .bounceIn()
        .then(() => this.iconRef.current.bounceOut());
    }
    this.lastPress = time;
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress}
        activeOpacity={1}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AnimatedIcon
          type="FontAwesome"
          name="heart"
          ref={this.iconRef}
          duration={500}
          delay={200}
          style={{
            position: 'absolute',
            zIndex: 2,
            color: 'white',
            fontSize: 60,
            width: undefined,
            opacity: 0,
          }}
        />
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default LikeHeart;
