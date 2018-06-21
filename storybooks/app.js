const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

// Load Models
require('./models/User');
require('./models/Story');

// Passport Config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');
const index = require('./routes/index');
const stories = require('./routes/stories');

// Load Keys
const keys = require('./config/keys');

// Handlebar Helpers
const {
  truncate,
  stripTags,
  formatDate,
  select,
  editIcon
} = require('./helpers/hbs');

// Map Global promises
mongoose.Promise = global.Promise;

// Mongoose Connect
// useMongoClient:true
mongoose.connect(keys.mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Method Override Middleware
app.use(methodOverride('_method'));

// Handlebars Middleware
app.engine('handlebars', exphbs({
  helpers: {
    truncate: truncate,
    stripTags: stripTags,
    formatDate: formatDate,
    select: select,
    editIcon: editIcon
  },
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Set global vars
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.locals.fullYear = (new Date()).getFullYear();

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/', index);
app.use('/auth', auth);
app.use('/stories', stories);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
