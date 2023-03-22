const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const urlencoded = require('express');
const route = require('./routes/index');
const methodOverride = require('method-override')
const SortMiddleware = require('./app/middllewares/SortMiddleware')
const app = express();
const port = 3000;
const db = require('./config/db')


db.connect()

app.use(methodOverride('_method'))
app.use(SortMiddleware)
// app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
  'handlebars',
  handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./helpers/handlebars')
  })
);
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources/views'));
// route
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
