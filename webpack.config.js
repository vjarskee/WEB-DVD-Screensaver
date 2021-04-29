const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

module.exports = (env, options) => {
  return {
    mode: options.mode == 'development' ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'script.js',
      path: path.resolve(__dirname, 'dist'),
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false
      }
    },
    devtool: options.mode == 'development' ? 'inline-source-map' : false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        inject: 'body'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ],
    devServer: {
      port: 3330,
      stats: 'errors-only',
      overlay: true
    }
  }
}
