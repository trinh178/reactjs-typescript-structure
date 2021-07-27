const path = require('path');
const webpack = require('webpack');

// Use to create index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Use to define environment variables
const { DefinePlugin } = webpack;
// Read .env files
const dotenv = require('dotenv').config({ path: `${__dirname}/src/app/env/development.env` });
// Create define plugin with .env file above
const definePlugins = new DefinePlugin({
    'process.env': JSON.stringify(dotenv.parsed),
});

// Eslint
const ESLintPlugin = require('eslint-webpack-plugin');

// Use to extracts CSS into separate files, it creates a CSS file per TSX/TS/JS file which contains CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname),
    entry: {
        index: './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader', // To ES5
                    },
                    {
                        loader: 'ts-loader', // To Javascript
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            /*
            // Javascript
            {
                test: /\.m?js?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            */
        ],
    },
    plugins: [
        definePlugins,
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new ESLintPlugin({
            context: './src/**',
            useEslintrc: true,
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].styles.bundle.css',
            chunkFilename: '[name].styles.chunk.css',
        }),
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        moduleIds: 'named',
        splitChunks: {
            chunks: 'all',
        },
    },
    performance: {
        hints: false,
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8080,
        host: 'localhost',
        progress: false,
        historyApiFallback: true,
        watchContentBase: false,
        stats: 'errors-only',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/,
        },
    },
};
