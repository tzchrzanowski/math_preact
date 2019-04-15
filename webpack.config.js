const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return {
      mode,
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist')
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                "babelrc": false,
                "plugins": [
                    "dynamic-import-webpack",
                ]
              }
            },
          },
          {
            test: /\.jsx$/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ['@babel/plugin-transform-react-jsx', { pragma: 'h' }]
              ]
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProgressPlugin(),
      ]
    };
};