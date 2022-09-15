module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
    plugins: [
      "react-native-reanimated/plugin",
    ],
=======
    plugins: ['macros'],
>>>>>>> 68f5f80c7ef5cfedd4482d3dfbf020f83aea52e0
  };
};
