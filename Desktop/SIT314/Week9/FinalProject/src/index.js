const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const path = require('path');
const { ESRCH } = require('constants');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// app.use(morgan('combined'));

app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);


app.listen(PORT, () => {
    console.log(`App is runnning on ${PORT}`)
}) 