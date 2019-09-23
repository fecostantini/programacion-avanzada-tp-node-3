const express = require('express');
const app = express();
var hbs = require('hbs');
// require('./handlebars/helpers');
app.use(express.static(__dirname + '/public'));

port = process.env.PORT || 3000;
// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/portfolio', (req, res) => {
	res.render('portfolio');
});

app.get('/blog', (req, res) => {
	res.render('blog');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

app.get('/blog-post', (req, res) => {
	res.render('blog-post');
});

app.get('/portfolio-item', (req, res) => {
	res.render('portfolio-item');
});

app.listen(port, () => {
	console.log(`Escuchando en el puerto ${port}`);
	//listen recibe un callback, le paaso una funcion
});
