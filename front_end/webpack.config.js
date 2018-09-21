const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
    mode: isDevMode ? 'development' : 'production',

    entry: {
        'main': [
            'babel-polyfill',
            path.join(__dirname, 'index')
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../wwwroot')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif|tiff|bmp)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html'),
            chunks: ['main']
        }),
        new VueLoaderPlugin()
    ],

    resolve: {
        alias: {
            '~': __dirname,
            'root': __dirname,
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['.json', '.js', '.css', '.scss']
    },

    devtool: isDevMode ? 'cheap-module-eval-source-map' : 'source-map'
};