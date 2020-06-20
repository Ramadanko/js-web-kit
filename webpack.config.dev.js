import path from 'path';

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
    plugins: [],
    module:{
        rules:[
            { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader']},
            { test: /\.(css|scss)$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
}
