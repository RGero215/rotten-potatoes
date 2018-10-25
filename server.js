const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rotten-potatoes');

const Review = mongoose.model('Review', {
    title: String,
    movieTitle: String
})


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
  res.render('reviews-index', {reviews: reviews})
})

// OUR MOCK ARRAY OF PROJECTS
// let reviews = [
//     {title: 'Great Review', movieTitle: 'Batman II'},
//     {title: 'Awesome Movie', movieTitle: 'Titanic'},
//     {title: 'Great Movie', movieTitle: 'Peaceful Warrior'},
//     {title: 'The Movie is OK', movieTitle: 'Venon'},
// ]

// INDEX
app.get('/reviews', (req, res) => {
    Review.find()
        .then(reviews => {
            res.render('reviews-index', {reviews: reviews});
        })
        .catch(err => {
            console.log(err);
        })
    
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
