module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.js', '.ios.js', '.android.js', '.ts', '.android.ts', '.ios.ts', '.tsx'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
