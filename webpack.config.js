const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve:{
        extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
        app: "./index.tsx",
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
        rules: [
            {
                test: /\.(ts|tsx)$/,
                 exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    "babelCore": "@babel/core", 
                },
            },
            {
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
                        limit: 5000,
                        name: './img/[hash].[name].[ext]',
                        esModule: false,
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
    ],
    devtool: 'inline-source-map',
}