const express = require('express')
const app = express()

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
  res.render('reviews-index', {reviews: reviews})
})

// OUR MOCK ARRAY OF PROJECTS
let reviews = [
    {title: 'Great Review', movieTitle: 'Batman II'},
    {title: 'Awesome Movie', movieTitle: 'Titanic'},
    {title: 'Great Movie', movieTitle: 'Peaceful Warrior'},
    {title: 'The Movie is OK', movieTitle: 'Venon'},
]

// INDEX
app.get('/reviews', (req, res) => {
    res.render('reviews-index', {reviews: reviews});
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
