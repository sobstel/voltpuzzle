import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { HButton } from 'react-native-hydro-kit';
import { $ } from 'react-native-hydro-kit/lib';
import VIcon from '@volt/components/VIcon';

export default class extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <HButton size={$.buttonSize} color={$.buttonColor} {...this.props}>
        <VIcon size={$.buttonSize - 36} name={this.props.name} />
      </HButton>
    );
  }
}
