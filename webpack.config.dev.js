var path = require('path');

module.exports = {
  devtool: 'eval',
  resolve: {
    root: __dirname + '/source'
  },
  entry: [
    './source/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'source'),
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: path.join(__dirname, 'source/sass')
    },
    {
      test: /\.svg$/,
      loaders: ['raw-loader', 'svgo-loader?useConfig=svgoConfig'],
      include: path.join(__dirname, 'source/images')
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file?name=[path][hash].[ext]',
      include: path.join(__dirname, 'source/images')
    }]
  },
  svgoConfig: {
    plugins: [
      { removeTitle: true },
      { convertColors: { shorthex: false } },
      { convertPathData: false },
      { removeDimensions: true },
      { addClassesToSVGElement: { className: 'svg-img' } }
    ]
  }
};
