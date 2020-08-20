import express from 'express';
import path from 'path';
import open from 'open';
import webpack from "webpack";
import config from '../webpack.config.dev';
// disable no-console warnings in build files
/* eslint-disable no-console*/

const port = 3000;
const app = express();
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use( require('webpack-dev-middleware')( compiler, {
    publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen( port , (err) => {
    if(err){
        console.log(err)
    }else{
        open(`http://localhost:${port}`);
    }
})
