import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

// disable no-console warnings in build files
/* eslint-disable no-console*/

const port = 3000;
const app = express();
// enable gzip compression in express
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', (req, res) => {
    res.send([]);
});

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        open(`http://localhost:${port}`);
    }
})
