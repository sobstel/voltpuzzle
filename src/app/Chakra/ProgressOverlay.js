import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { closeProgressOverlay } from '@volt/ducks/chakra';
import styled from 'styled-components';
import VOverlay from '@volt/components/VOverlay';

const mapDispatchToProps = {
  closeProgressOverlay,
};

export default connect(null, mapDispatchToProps)(
  class extends PureComponent {
    overlay = null;

    render() {
      return (
        <Overlay {...this.props}>
          <TouchableOpacity
            style={{ width: '100%', height: '100%' }}
            onPress={this.props.closeProgressOverlay}
          />
        </Overlay>
      );
    }
  }
);

const Overlay = styled(VOverlay).attrs({
  animation: 'fadeInUpRightBig',
  unmountAnimation: 'fadeOutDownRightBig',
})``;
