var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname);// Get current file root path 
var ENTRY_PATH = path.resolve(ROOT_PATH,'src'); // parse this path to absolute path
var BUILD_PATH = path.resolve(ROOT_PATH,'build'); // parse this file to absolute path

//use obj thinking to deal with webpack
const webpackConfig = {
    entry: ENTRY_PATH,
    output : {
        path : BUILD_PATH,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'First react webpack project'
        })
    ],
    devtool: 'eval-source-map'
};

webpackConfig.devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
};

webpackConfig.module = {
    loaders: [
            { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader'},
            { test: /\.css$/, loader: 'style!css' },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: ENTRY_PATH
                // query: {
                //     presets: ['es2015','react']
                // }
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
};
module.exports = webpackConfig;

// module.exports = {
    // entry: ENTRY_PATH,
    // output : {
    //     path : BUILD_PATH,
    //     filename: 'bundle.js'
    // },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'First react webpack project'
    //     })
    // ],
    // devtool: 'eval-source-map',
    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     progress: true
    // },
//     module: {
//         loaders: [
//             { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader'},
//             { test: /\.css$/, loader: 'style!css' },
//             {
//                 test: /\.(png|jpg)$/,
//                 loader: 'url-loader?limit=40000'
//             },
//             {
//                 test: /\.jsx?$/,
//                 loader: 'babel-loader',
//                 include: ENTRY_PATH
//                 // query: {
//                 //     presets: ['es2015','react']
//                 // }
//             },
//             { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
//             { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
//             { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
//             { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
//         ]
//     }
// }
