module.exports = {
  extends: 'universe/native',

  globals: {
    Expo: false,
  },

  rules: {
    'react/require-default-props': 'error',
    'react/sort-prop-types': 'error',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
  },
};
