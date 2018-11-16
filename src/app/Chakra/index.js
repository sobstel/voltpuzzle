import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {
  frontArrowDidMount,
  frontArrowDidUnmount,
  openMenuOverlay,
  openProgressOverlay,
} from '@volt/ducks/chakra';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';
import chakraImages from '@volt-assets/images/chakra';
import { vw } from 'react-native-hydro-kit/lib';
import VIconButton from '@volt/components/VIconButton';
import Clock from './Clock';
import MenuOverlay from './MenuOverlay';
import ProgressOverlay from './ProgressOverlay';

const RIBBON_SIZE = Math.max(vw(27.5), 100);
const RIBBON_ICON_SIZE = RIBBON_SIZE / 3;

const mapStateToProps = state => ({
  backArrow: state.chakra.arrows,
  frontArrow: state.chakra.arrows,
  menuOverlay: state.chakra.menuOverlay,
  progressOverlay: state.chakra.progressOverlay,
});

const mapDispatchToProps = {
  frontArrowDidMount,
  frontArrowDidUnmount,
  openMenuOverlay,
  openProgressOverlay,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends PureComponent {
    render() {
      return (
        <MainContainer>
          <View>
            <BackgroundImage source={chakraImages.bg} />
            <ContentContainer>
              <View>
                <BackArrow name="chakra.arrowUp" mounted={this.props.backArrow} />
              </View>
              <Clock />
              <View>
                <FrontArrow
                  name="chakra.arrowDown"
                  mounted={this.props.frontArrow}
                  didMount={this.props.frontArrowDidMount}
                  didUnmount={this.props.frontArrowDidUnmount}
                />
              </View>
            </ContentContainer>
            <TopBar>
              <TouchableOpacity onPress={this.props.openMenuOverlay}>
                <TopLeftRibbon />
                <SettingsIcon />
              </TouchableOpacity>
            </TopBar>
            <BottomBar>
              <TouchableOpacity onPress={this.props.openProgressOverlay}>
                <BottomRightRibbon />
                <ProgressIcon />
              </TouchableOpacity>
            </BottomBar>
          </View>
          <MenuOverlay mounted={this.props.menuOverlay} />
          <ProgressOverlay mounted={this.props.progressOverlay} />
        </MainContainer>
      );
    }
  }
);

const MainContainer = styled.View``;

const ContentContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding-vertical: ${RIBBON_SIZE / 2};
`;

const BackgroundImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackArrow = styled(VIconButton).attrs({
  animation: 'fadeInUp',
  unmountAnimation: 'fadeOutDown',
  duration: 400,
})``;

const FrontArrow = styled(VIconButton).attrs({
  animation: 'fadeInDown',
  unmountAnimation: 'fadeOutUp',
  duration: 400,
})``;

const Ribbon = styled.View`
  width: 0;
  height: 0;
  background-color: transparent;
  border-right-width: ${RIBBON_SIZE};
  border-top-width: ${RIBBON_SIZE};
  border-right-color: transparent;
  border-top-color: black;
  opacity: 0.75;
`;

const TopBar = styled(Animatable.View).attrs({
  animation: 'slideInDown',
  delay: 500,
})`
  position: absolute;
  top: 0;
  left: 0;
`;

const TopLeftRibbon = styled(Ribbon)`
  position: absolute;
  top: 0;
  left: 0;
`;

const SettingsIcon = styled(MaterialCommunityIcons).attrs({
  name: 'power-settings',
  size: RIBBON_ICON_SIZE,
  color: '#EEEEEE',
})`
  position: absolute;
  left: ${(RIBBON_SIZE / 2 - RIBBON_ICON_SIZE) / 1.5};
  top: ${(RIBBON_SIZE / 2 - RIBBON_ICON_SIZE) / 1.5};
  transform: rotate(315deg);
`;

const BottomBar = styled(Animatable.View).attrs({
  animation: 'slideInUp',
  delay: 500,
})`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const BottomRightRibbon = styled(Ribbon)`
  transform: rotate(180deg);
`;

const ProgressIcon = styled(MaterialCommunityIcons).attrs({
  name: 'battery-charging-20',
  size: RIBBON_ICON_SIZE,
  color: '#EEEEEE',
})`
  position: absolute;
  right: ${(RIBBON_SIZE / 2 - RIBBON_ICON_SIZE) / 1};
  bottom: ${(RIBBON_SIZE / 2 - RIBBON_ICON_SIZE) / 1};
  transform: rotate(135deg);
`;
