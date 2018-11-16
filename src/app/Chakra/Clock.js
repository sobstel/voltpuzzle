import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';
import { clockDidRotate, rotatorDidStart } from '@volt/ducks/chakra';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';
import chakraImages from '@volt-assets/images/chakra';
import { vw } from 'react-native-hydro-kit/lib';
import VIconButton from '@volt/components/VIconButton';

const mapStateToProps = state => ({
  frontHour: state.chakra.frontHour,
  rotatorDisabled: state.chakra.rotating,
});

const mapDispatchToProps = {
  clockDidRotate,
  rotatorDidStart,
};

export default ReactTimeout(
  connect(mapStateToProps, mapDispatchToProps)(
    class extends PureComponent {
      face = null;

      componentDidUpdate(prevProps) {
        if (prevProps.frontHour !== this.props.frontHour) {
          this.rotate(this.props.frontHour);
        }
      }

      render() {
        return (
          <Container>
            <Face source={chakraImages.clock} innerRef={ref => (this.face = ref)} />
            <Rotator
              name="chakra.rotator"
              disabled={this.props.rotatorDisabled}
              onPress={this.props.rotatorDidStart}
            />
          </Container>
        );
      }

      rotate = async frontHour => {
        this.face && (await this.face[`rotateClockTo${frontHour}`](500));
        this.props.clockDidRotate();
      };
    }
  )
);

const CLOCK_SIZE = vw(82);

const Container = styled(Animatable.View).attrs({
  animation: 'fadeIn',
  duration: 800,
})`
  width: ${CLOCK_SIZE};
  height: ${CLOCK_SIZE};
  align-items: center;
  justify-content: center;
`;

const Face = styled(Animatable.Image)`
  width: 100%;
  height: 100%;
`;

const Rotator = styled(VIconButton).attrs({
  animation: 'bounceIn',
})`
  position: absolute;
`;
