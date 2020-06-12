const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    entry: {
        app: "./index.js",
        appStyles: ["./mystyles.scss"],
    },
    stats: "errors-only",
    devServer: {
        stats: "errors-only"
    },
    output: {
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
           test:/\.scss$/,
           exclude: /node_modules/,
           use: [
               MiniCssExtractPlugin.loader,
               "css-loader",
               {
                   loader:"sass-loader",
                   options:{
                       implementation: require("sass")
                   }
               }
           ] 
        },
        {
            test:/\.(png|jpg)$/,
            exclude: /node_modules/,
            use:{
                loader: 'url-loader',
                options:{
                    limit: 5000
                }
            }
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        }
    ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
        })
    ]
}