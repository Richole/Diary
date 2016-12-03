/**
 * Created by mac on 16/7/14.
 */
var webpack = require('webpack'),
    path = require('path');

module.exports = {
    //页面入口文件配置
    entry: {
        app: './public/javascripts/main.js'
    },

    //入口文件输出配置
    output: {
        filename: 'app.js',
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
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.js|jsx$/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                include: path.join(__dirname, 'js')
            }
        ]
    },

    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json', '.scss']
    },

    //插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};