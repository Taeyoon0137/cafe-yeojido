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
          '@screens': './src/screens',
          '@types': './src/types',
        },
      },
    ],
  ],
};
