var express = require('express');
var app = express();
const port = 3000;

app.get('/', (req, res) => res.send('1Hello World'));

app.listen(port, () => console.log(`Listening on port ${port}`))