var express = require('express');
var path = require('path');
var app = express();
var morgan = require('morgan');
var handlebars = require('express-handlebars');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//Http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));



app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`); 
});