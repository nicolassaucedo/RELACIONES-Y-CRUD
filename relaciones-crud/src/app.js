const express = require('express');
const path = require('path');

const methodOverride = require("method-override");

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const index = require('./routes/indexRouter');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use('/',moviesRoutes);
app.use(genresRoutes);
app.use(index)

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));

