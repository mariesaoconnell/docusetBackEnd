//==== Basic Config ====//
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

//==== Middleware ====//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//==== Routes ====//

//==== Redirects ====//
app.get('/', (req, res) => {
	res.redirect('/home');
});

//==== Start Server ====//
app.listen(PORT, () => console.log('Our API is listening on port: ' + PORT));
