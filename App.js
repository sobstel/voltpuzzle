import '@volt/initializers';

import React, { PureComponent } from 'react';
import { StatusBar, View } from 'react-native';
import { AppLoading, Asset, Font, KeepAwake } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import chakraImages from '@volt-assets/images/chakra';
import icons from '@volt-assets/images/icons';
import store from '@volt/store';
import Body from '@volt/app/Body';

export default class extends PureComponent {
  state = {
    assetsLoaded: false,
  };

  async componentDidMount() {
    await this.loadAssets();
    this.setState({ assetsLoaded: true });
  }

  render() {
    if (!this.state.assetsLoaded) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <View>
          <StatusBar hidden />
          <KeepAwake />
          <Body />
        </View>
      </Provider>
    );
  }

  loadAssets() {
    // TODO: review if only this used
    const vectorIconsLoader = Font.loadAsync(MaterialCommunityIcons.font);

    const customFontsLoader = Font.loadAsync({
      Fibre: require('@volt-assets/fonts/Fibre.otf'),
      // TODO: review if all used
      SourceCodePro: require('@volt-assets/fonts/Source_Code_Pro/SourceCodePro-Regular.ttf'),
      SourceCodeProLight: require('@volt-assets/fonts/Source_Code_Pro/SourceCodePro-Light.ttf'),
      SourceCodeProMedium: require('@volt-assets/fonts/Source_Code_Pro/SourceCodePro-Medium.ttf'),
      SourceCodeProSemiBold: require('@volt-assets/fonts/Source_Code_Pro/SourceCodePro-Semibold.ttf'),
    });

    // TODO: review if all images imported
    const imagesLoader = Asset.loadAsync([...Object.values(icons), ...Object.values(chakraImages)]);

    return Promise.all([vectorIconsLoader, customFontsLoader, imagesLoader]);
  }
}
