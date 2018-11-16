/**
 * Pulsating button
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import styled from 'styled-components';
import { animatable } from 'react-native-hydro-kit/lib';
import Color from 'color';

export default class extends PureComponent {
  static propTypes = {
    animation: PropTypes.string,
    color: PropTypes.string,
    didUnmount: PropTypes.func,
    disableOnPress: PropTypes.bool,
    disabled: PropTypes.bool,
    mounted: PropTypes.bool,
    name: PropTypes.string,
    onPress: PropTypes.func,
    pulseDuration: PropTypes.number,
    size: PropTypes.number,
    style: ViewPropTypes.style,
    text: PropTypes.string,
    unmountAnimation: PropTypes.string,
  };

  static defaultProps = {
    animation: 'bounceIn',
    color: '#FF9600',
    didUnmount: () => {},
    disableOnPress: false,
    disabled: false,
    mounted: true,
    name: null,
    onPress: () => {},
    pulseDuration: 1000,
    size: 82,
    style: {},
    text: null,
    unmountAnimation: 'bounceOut',
  };

  state = {
    disabled: false,
    pulse: false,
    highlight: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.disabled !== prevState.disabled) {
      return { disabled: nextProps.disabled };
    }
    return null;
  }

  render() {
    const color = this.color();
    const activeOpacity = this.state.disabled ? 1 : 0.7;

    return (
      <Container
        animation={this.props.animation}
        unmountAnimation={this.props.unmountAnimation}
        size={this.props.size}
        onAnimationEnd={this.onAnimationEnd}
        didUnmount={this.props.didUnmount}
        style={this.props.style}
        mounted={this.props.mounted}
        {...this.props}>
        <InnerButton
          size={this.props.size}
          color={color}
          activeOpacity={activeOpacity}
          onPress={this.onPress}>
          {this.props.children}
        </InnerButton>
        <OuterBorder size={this.props.size} color={color} />
        {!this.state.disabled && this.state.pulse && this.renderPulse(color)}
        {!this.state.disabled && this.state.highlight && this.renderHighlight(color)}
      </Container>
    );
  }

  renderPulse(color) {
    return [
      <Pulse
        size={this.props.size}
        color={color}
        pulseDuration={this.props.pulseDuration}
        key={0}
        mounted
      />,
      <Pulse
        size={this.props.size}
        color={color}
        pulseDuration={this.props.pulseDuration}
        delay={this.props.pulseDuration}
        key={1}
        mounted
      />,
    ];
  }

  renderHighlight(color) {
    return (
      <Highlight
        size={this.props.size}
        color={color}
        onAnimationEnd={this.onHiglightAnimationEnd}
        mounted
      />
    );
  }

  onAnimationEnd = () => this.setState({ pulse: true });

  onHiglightAnimationEnd = () => this.setState({ pulse: true, highlight: false });

  onPress = () => {
    if (this.state.disabled) {
      return;
    }

    // needed for quick subsequent presses to restart animation
    this.setState({ highlight: false });

    requestAnimationFrame(() => {
      this.setState({ pulse: false, highlight: true });

      if (this.props.disableOnPress) {
        this.setState({ disabled: true });
      }

      this.props.onPress();
    });
  };

  color = () => {
    let { color } = this.props;
    if (this.state.disabled) {
      color = Color(color)
        .desaturate(0.3)
        .fade(0.3)
        .string();
    }
    return color;
  };
}

const Container = styled(animatable(View)).attrs({
  delay: 250,
  duration: 1000,
  unmountAnimation: 500,
})`
  width: ${props => props.size};
  height: ${props => props.size};
`;

const InnerButton = styled.TouchableOpacity.attrs({
  buttonSize: props => props.size - 28,
})`
  position: absolute;
  top: 14;
  left: 14;
  align-items: center;
  justify-content: center;
  z-index: 4;
  width: ${props => props.buttonSize};
  height: ${props => props.buttonSize};
  border-radius: ${props => props.buttonSize};
  background-color: ${props => props.color};
`;

const OuterBorder = styled.View.attrs({
  borderSize: props => props.size - 20,
})`
  position: absolute;
  top: 10;
  left: 10;
  border-width: 2;
  z-index: 3;
  width: ${props => props.borderSize};
  height: ${props => props.borderSize};
  border-radius: ${props => props.borderSize / 2};
  border-color: ${props => props.color};
`;

const Pulse = styled(animatable(View)).attrs({
  animation: {
    0: { opacity: 0.7, scale: 0.65 },
    0.95: { opacity: 0, scale: 1.1 },
    1: { opacity: 0, scale: 1.1 },
  },
  easing: 'ease-out-cubic',
  duration: props => props.pulseDuration * 2,
  iterationCount: 'infinite',
})`
  position: absolute;
  top: 0;
  left: 0;
  border-width: 3;
  border-color: ${props => props.color}
  z-index: 1;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size / 2};
`;

const Highlight = styled(animatable(View)).attrs({
  animation: {
    0: { opacity: 0.7, scale: 0.7 },
    1: { opacity: 0, scale: 1.05 },
  },
  easing: 'ease-out-cubic',
  duration: props => props._pulseDuration / 2,
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size / 2};
  background-color: ${props => props.color};
`;
