module.exports = {
  mode: 'development',
  entry: {
    carousel: './src/Carousel',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};