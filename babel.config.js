module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@commons': './src/commons',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
