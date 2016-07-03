import path from 'path'
import webpack from 'webpack'

const ENV = process.env['NODE_ENV'] || 'development'
const DEBUG = ENV !== 'production'

const URL = process.env['URL'] || 'http://megogo.net'
const API_URL = process.env['API_URL'] || 'https://api.megogo.net/v1'
const API_PRIVATE_KEY = process.env['API_PRIVATE_KEY'] || '63ee38849d'
const API_PUBLIC_KEY = process.env['API_PUBLIC_KEY'] || '_kodi_j1'

let config = {
  cache: DEBUG,
  debug: DEBUG,
  devtool: false,
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV),
        URL: JSON.stringify(URL),
        API_URL: JSON.stringify(API_URL),
        API_PRIVATE_KEY: JSON.stringify(API_PRIVATE_KEY),
        API_PUBLIC_KEY: JSON.stringify(API_PUBLIC_KEY)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
}
if (ENV === 'development') {
  config.devtool = 'source-map'
} else if (ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin())
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  }))
}
export default config
