import React, { PureComponent } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { closeMenuOverlay } from '@volt/ducks/chakra';
import styled from 'styled-components';
import { $, _, rem, vw } from 'react-native-hydro-kit/lib';
import VOverlay from '@volt/components/VOverlay';
import VText from '@volt/components/VText';

const mapDispatchToProps = {
  closeMenuOverlay,
};

export default connect(null, mapDispatchToProps)(
  class extends PureComponent {
    render() {
      return (
        <Overlay {...this.props}>
          <Container>
            <Title>{_('title')}</Title>
            <Item onPress={this.openAbout}>
              <ItemText>About</ItemText>
            </Item>
            <Item onPress={this.openWalkthrough}>
              <ItemText>Walkthrough</ItemText>
            </Item>
            <Item onPress={this.reset}>
              <ItemText>Reset the game</ItemText>
            </Item>
            <Item onPress={this.openCredits}>
              <ItemText>Credits</ItemText>
            </Item>
            <ItemGroup>
              <HalfItem onPress={this.openTwitter}>
                <ItemText>T</ItemText>
              </HalfItem>
              <HalfItem onPress={this.openInstagram}>
                <ItemText>I</ItemText>
              </HalfItem>
            </ItemGroup>
            <Item onPress={this.openHydropuzzle}>
              <ItemText>Hydropuzzle</ItemText>
            </Item>
            <Item onPress={this.props.closeMenuOverlay}>
              <ItemText>Back to the game</ItemText>
            </Item>
          </Container>
        </Overlay>
      );
    }

    openAbout = () => Linking.openURL('https://www.sobstel.org/voltpuzzle/');
    openWalkthrough = () => Linking.openURL('https://www.sobstel.org/voltpuzzle/walkthrough/');
    reset = () => {};
    openCredits = () => {};
    openTwitter = () => {};
    openInstagram = () => {};
    openHydropuzzle = () => Linking.openURL('https://www.sobstel.org/hydropuzzle/');
  }
);

const Overlay = styled(VOverlay).attrs({
  animation: 'fadeInDownLeftBig',
  unmountAnimation: 'fadeOutUpLeftBig',
})``;

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #ddd;
  font-family: Fibre;
  font-size: ${rem(3)};
  letter-spacing: ${rem(0.25)};
  margin-bottom: 20;
`;

const Item = styled(TouchableOpacity)`
  width: ${vw(50)};
  margin-vertical: 10;
  border-width: 1;
  border-color: #ccc;
  border-radius: 5;
  padding-vertical: 10;
  align-items: center;
  background-color: #111;
`;

const HalfItem = styled(Item)`
  width: ${vw(22.5)};
  margin-horizontal: ${vw(2.5)};
`;

const ItemGroup = styled.View`
  flex-direction: row;
`;

const ItemText = styled(VText)`
  color: #eee;
  font-family: ${$.fontBold};
`;
