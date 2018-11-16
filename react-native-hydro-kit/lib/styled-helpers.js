import Dimensions from 'Dimensions';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import $ from './config';

const { width } = Dimensions.get('window');

export function vw(value) {
  return value / 100 * width;
}

export function rem(value) {
  return $.unit * value;
}

export function iphonex(iphonexValue = true, regularValue = false) {
  return ifIphoneX(iphonexValue, regularValue);
}
