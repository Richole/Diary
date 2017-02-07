/**
 * Created by mac on 16/7/14.
 */
var webpack = require('webpack'),
    path = require('path');

module.exports = {
    //页面入口文件配置
    entry: {
        app: './public/javascripts/main.js',
        demo: './public/javascripts/demo/index.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    //入口文件输出配置
    output: {
        filename: '[name].js',
        path: './public/javascripts/output'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },

    devtool: 'source-map',

    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json', '.scss']
    },

    //插件项
    plugins: [
    ]
};
