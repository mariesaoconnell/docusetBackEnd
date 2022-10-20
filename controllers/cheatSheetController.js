const express = require('express');
const router = express.Router();
const CheatSheet = require('../models/CheatSheet');

// ==== CREATE CRUD OPERATIONS ====

// GET  
router.get('/', (req, res, next) => {
	CheatSheet.find({})
		.then((cheatSheets) => res.json(cheatSheets))
		.catch(next);
});

// GET CHEATSHEET BY ID  
router.get('/:id', (req, res, next) => {
	CheatSheet.findById(req.params.id)
		.then((cheatSheets) => res.json(cheatSheets))
		.catch(next);
});

// CREATE 
router.post('/', async (req, res, next) => {
	try {
		const newCheatSheet = await CheatSheet.create(req.body);
		const allCheatSheets = await CheatSheet.find({});
		res.status(201).json(allCheatSheets);
	} catch (err) {
		next(err);
	}
});


// UPDATE  
router.put('/:id', async (req, res, next) => {
	try {
		const updatedCheatSheet = await CheatSheet.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		const allCheatSheets = await CheatSheet.find({});
		res.status(201).json(allCheatSheets);
	} catch (err) {
		next(err);
	}
});

// DELETE 
router.delete('/:id', async (req, res, next) => {
	try {
		const deletedCheatSheet = await CheatSheet.findByIdAndDelete(req.params.id);
		const allCheatSheets = await CheatSheet.find({});
		res.json(allCheatSheets);
	} catch (err) {
		next(err);
	}
});

module.exports = router; 