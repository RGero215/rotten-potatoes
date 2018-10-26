const express = require('express')
const app = express()
const methodOverride = require('method-override')
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser')
const Review = require('./models/review')
const Comment = require('./models/comment')

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

const reviews = require('./controllers/reviews')(app);
const comments = require('./controllers/comments')(app);


if(!module.parent) {
    app.listen(port, () => {
        console.log('App listening on port 3000!')
    })
 }
module.exports = app;
