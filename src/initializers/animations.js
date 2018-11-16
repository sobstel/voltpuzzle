import { initializeRegistryWithDefinitions } from 'react-native-animatable';

initializeRegistryWithDefinitions({
  // overlay
  fadeInDownLeftBig: {
    from: {
      opacity: 0,
      translateX: -500,
      translateY: -500,
    },
    to: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
  },

  // overlay
  fadeInUpRightBig: {
    from: {
      opacity: 0,
      translateX: 500,
      translateY: 500,
    },
    to: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
  },

  // overlay
  fadeOutDownRightBig: {
    from: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
    to: {
      opacity: 0,
      translateX: 250,
      translateY: 500,
    },
  },

  // overlay
  fadeOutUpLeftBig: {
    from: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
    to: {
      opacity: 0,
      translateX: -250,
      translateY: -500,
    },
  },

  // clock rotation
  rotateClockTo6: { from: { rotate: '-270deg' }, to: { rotate: '-360deg' } },
  rotateClockTo9: { from: { rotate: '0deg' }, to: { rotate: '-90deg' } },
  rotateClockTo0: { from: { rotate: '-90deg' }, to: { rotate: '-180deg' } },
  rotateClockTo3: { from: { rotate: '-180deg' }, to: { rotate: '-270deg' } },
});
