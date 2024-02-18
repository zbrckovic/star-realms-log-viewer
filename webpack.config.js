const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const pkg = require('./package.json')

const cardImagesUrl = 'https://www.starrealms.com/wp-content/uploads/2021/12'

module.exports = (env, argv) => {
  const mode = argv.mode || 'production'
  const isDevelopment = mode === 'development'
  const [gitHash, gitDate] = extractGitHashAndDate()

  return ({
    mode,
    entry: './src/index.tsx',
    devServer: {
      historyApiFallback: true
    },
    output: {
      publicPath: isDevelopment ? '/' : '/star-realms-log-viewer/',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: [
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, './src')
      ],
    },
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: 'raw-loader',
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // style modules
        {
          test: /\.sass$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
          include: /\.module\.sass$/,
        },
        // normal styles
        {
          test: /\.sass$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
          exclude: /\.module\.sass$/,
        },
        // normal css
        {
          test: /\.css$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ]
        },
        {
          test: /\.(png|jpg|gif|xml)$/i,
          type: 'asset/resource'
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env.VERSION': JSON.stringify(pkg.version),
        'process.env.MODE': JSON.stringify(mode),
        'process.env.GIT_COMMIT_HASH': JSON.stringify(gitHash),
        'process.env.GIT_COMMIT_DATE': JSON.stringify(gitDate),
        'process.env.CART_IMAGES_URL': JSON.stringify(cardImagesUrl)
      })
    ]
  })
}

const extractGitHashAndDate = () =>
    require('child_process')
        .execSync('git log -1 --format="%h|%aI"')
        .toString()
        .trim()
        .split('|')
