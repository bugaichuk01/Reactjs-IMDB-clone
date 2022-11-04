const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

require('dotenv').config({path: __dirname + '/.env'})

let mode = "development";
if (process.env.NODE_ENV === "production") mode = "production"

module.exports = {
    mode: mode,
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/",
        filename: '[name].[contenthash].js'
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    devtool: 'eval-cheap-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            },
            {
                test: /\.(jpe?g|gif|svg|png)/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./public/index.html"}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
            }
        )
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/components'),
            '_': [path.resolve(__dirname, 'src/_helpers'), path.resolve(__dirname, 'src/_hooks'), path.resolve(__dirname, 'src/_services')]
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
}