import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $, rem } from 'react-native-hydro-kit/lib';

export default class extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    // TODO: add type: mono, variant: thin|bold
  };

  render() {
    return <StyledText {...this.props}>{this.props.children}</StyledText>;
  }
}

const StyledText = styled.Text`
  font-family: ${$.font};
  font-size: ${rem(1)};
`;
