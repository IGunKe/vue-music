const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/static', express.static('static'));

app.use('/api', proxy({ target: 'http://music.163.com', changeOrigin: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');

});
app.listen(3000);
