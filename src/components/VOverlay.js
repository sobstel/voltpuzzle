import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled from 'styled-components';
import { animatable } from 'react-native-hydro-kit/lib';

export default class extends PureComponent {
  static propTypes = {
    animation: PropTypes.string,
    children: PropTypes.node.isRequired,
    unmountAnimation: PropTypes.string,
  };

  static defaultProps = {
    animation: 'fadeIn',
    unmountAnimation: 'fadeOut',
  };

  duration = 500;
  outerContainer = null;

  render() {
    return (
      <OuterContainer
        mounted={this.props.mounted}
        animation={this.props.animation}
        duration={this.duration}
        unmountAnimation={this.props.unmountAnimation}>
        <InnerContainer>{this.props.children}</InnerContainer>
      </OuterContainer>
    );
  }
}

const OuterContainer = styled(animatable(View))`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.View`
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0.92;
`;
