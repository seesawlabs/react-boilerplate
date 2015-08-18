module.exports = {
  entry: './app/components/App.js',

  output: {
    filename: './public/js/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}