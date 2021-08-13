const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine(
	'hbs',
	expressHbs({
		extname: 'hbs',
		defaultLayout: 'main-layout',
		layoutsDir: 'views/layout'
	})
);
app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).render('404', { pageTitle: 'Page not found' });
});

app.listen(PORT, () =>
	console.log(`Shopping cart application is running on port: ${PORT}`)
);
