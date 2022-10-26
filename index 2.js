//==== Basic Config ====//
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

//==== Middleware ====//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//==== Redirects ====//
app.get('/', (req, res) => {
	res.redirect('/cheatsheets');
});

//==== Routes ====//

// START CONTROLLERS
// CHECK THAT ENDPOINT MATCHES W/ FRONT END
const cheatSheetController = require('./controllers/cheatSheetController');
app.use('/cheatsheets', cheatSheetController);

// END CONTROLLERS
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});
//==== Start Server ====//
app.listen(PORT, () => console.log('Our API is listening on port: ' + PORT));
