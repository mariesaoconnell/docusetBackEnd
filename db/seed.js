const mongoose = require('./connection');
const CheatSheet = require('../models/CheatSheet');
const cheatSheetSeeds = require('./seeds.json');

CheatSheet.deleteMany().then(() =>
	CheatSheet.insertMany(cheatSheetSeeds)
		.then((res) => {
			console.log(res);
		})
		.catch(console.error)
		.finally(() => {
			process.exit();
		})
);
