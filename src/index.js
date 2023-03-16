const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const urlencoded = require('express');
const route = require('./routes/index');

const app = express();

const port = 3000;
// app.use(morgan('combined'))

// body parser midowe
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.engine(
  'handlebars',
  handlebars.engine({ defaultLayout: 'main', extname: '.hbs' })
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// route
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
