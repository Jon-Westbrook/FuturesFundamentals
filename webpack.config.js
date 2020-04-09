var path = require('path')

const getLoaders = env => {
  const loaders = [
    { test: /\.js$/, loader: 'babel' },
    { test: require.resolve('bootstrap-sass'), loader: 'imports-loader?jQuery=jquery' },
    { test: require.resolve('./src/_js/vendor/jquery-easing'), loader: 'imports-loader?jQuery=jquery' }
  ]

  if (env === 'dev') {
    loaders.push({ test: /\.js$/, exclude: /_js\/vendor/, loader: 'eslint' })
  }

  return loaders
}

module.exports = env => ({
  context: path.resolve(__dirname),
  entry: './src/_js/index.js',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: getLoaders(env)
  }
})
