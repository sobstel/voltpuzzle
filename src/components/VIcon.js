import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { HImage } from 'react-native-hydro-kit';
import icons from '@volt-assets/images/icons';

export default class extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  };

  render() {
    const { name } = this.props;
    const source = icons[name];

    if (!source) {
      throw Error(`Unregognized icon name ${name}`);
    }

    return (
      <HImage
        containerStyle={{ width: this.props.size, height: this.props.size }}
        {...this.props}
        source={source}
      />
    );
  }
}
