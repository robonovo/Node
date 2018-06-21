const dotenv = require('dotenv');
dotenv.config();

if(process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: process.env.MLAB_URI}
} else {
  module.exports = {mongoURI: process.env.LOC_DB_URI}
}
