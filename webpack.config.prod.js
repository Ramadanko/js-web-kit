import path from 'path';
//import webpack from 'webpack';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    mode: "production",
    devtool: 'source-map',
    entry: {
        main : path.resolve(__dirname, 'src/index'),
        vendor: path.resolve(__dirname, 'src/vendor')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: "[name].[chunkhash].js"
    },
    target: 'web',
    plugins: [
        // Create HTML file that includes references to bundled JS Automatically
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            // injects script tags automatically
            inject: true,
            minify:{
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            // Properties you define here are available in index.html
            // using htmlWebpackPlugin.options.varName
            trackJSToken: "INSERT YOUR TOKEN HERE"
        }),

        // Cache busting technique.
        // Hash the files using MD5 so that their names change when the content changes.
        new WebpackMd5Hash(),

        // extract css into separate file
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].css',
        })
    ],
    optimization: {
        // bundle splitting
        splitChunks:{
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    module:{
        rules:[
            { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader']},
            { test: /\.(css|scss)$/, exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'sass-loader'
                ]}
        ]
    }
}
