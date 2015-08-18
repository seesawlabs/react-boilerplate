module.exports = {
  entry: './test/AppSpec.js',

  output: {
    path: './test/',
    filename: 'spec.js',
    publicPath: '/test/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
}