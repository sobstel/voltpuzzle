import Dimensions from 'Dimensions';
import $ from 'react-native-hydro-kit/lib/config';

const { width } = Dimensions.get('window');

const BASE_UNIT = 16;
const ratioX = width < 320 ? 0.75 : width < 375 ? 0.875 : width < 768 ? 1 : 1.375;

$.unit = BASE_UNIT * ratioX;

// TODO: review
$.font = 'SourceCodePro';
$.fontBold = 'SourceCodeProSemiBold';
// $.monoFontBold = 'RobotoMonoBold';
$.titleFont = 'Fibre';

// TODO: color alternatives: #FFCC00, #FF3B30, #FF3824, #FF2D55, #CC0200
$.buttonColor = '#CC6633';
$.buttonSize = 82;
