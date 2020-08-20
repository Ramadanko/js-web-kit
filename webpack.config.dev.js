import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "development",
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    target: 'web',
    plugins: [
        // Create HTML file that includes references to bundled JS Automatically
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true// injects script tags automatically
        }),
    ],
    module:{
        rules:[
            { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader']},
            { test: /\.(css|scss)$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
}
