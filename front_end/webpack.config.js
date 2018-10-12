const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        filename: isDevMode ? '[name].js' : '[name].[hash].js',
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
                    { loader: isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif|tiff|bmp|webm)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }
        ]
    },

    optimization: {
        minimizer: [      
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        // Build an HTML file which includes all the CSS & JS chunks:
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html'),
            chunks: ['main']
        }),

        // Extract the CSS chunks into a minified, bundled CSS file:
        new MiniCssExtractPlugin({
            filename: isDevMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css',
        }),

        new VueLoaderPlugin()
    ],

    resolve: {
        alias: {
            '~': __dirname,
            'root': __dirname,
            'vue': 'vue/dist/vue.esm.js'
        },
        extensions: ['.json', '.js', '.css', '.scss']
    },

    devtool: isDevMode ? 'cheap-module-eval-source-map' : 'source-map'
};
