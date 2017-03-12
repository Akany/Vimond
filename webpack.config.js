var path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/main.js'
    },

    devtool: 'source-map',

    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            { test: /.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: {sourceMap: true} },
                    { loader: 'sass-loader', options: {sourceMap: true} }
                ]
            }
        ]
    },

    devServer: {
        historyApiFallback: true
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve('app/index.html')
        })
    ]
};