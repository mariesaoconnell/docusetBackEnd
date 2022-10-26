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
router.get('/id/:id', (req, res, next) => {
	CheatSheet.findById(req.params.id)
		.then((cheatSheets) => res.json(cheatSheets))
		.catch(next);
});

// GET BY TITLE
router.get('/title/:title', async(req, res, next)=>{
	try{
		const findAll = await CheatSheet.find({})
		if(!findAll) return res.status(404).send('Error, cannot be found')

		const filtered = findAll.filter((sheet)=>{
			if (!sheet.title) return;
			return (sheet.title.toLowerCase().includes((req.params.title).toLowerCase()))
		})
		res.status(200).send(filtered)
	}
	catch(err){
		next(err)
	}
})
// GET BY SUBJECT
router.get('/subject/:subject', async(req, res, next)=>{
	try{
		const findAll = await CheatSheet.find({})
		if(!findAll) return res.status(404).send('Error, cannot be found')

		const filtered = findAll.filter((sheet)=>{
			if (!sheet.subject) return;
			return (sheet.subject.toLowerCase().includes((req.params.subject).toLowerCase()))
		})
		res.status(200).send(filtered)
	}
	catch(err){
		next(err)
	}
})
// GET BY CONTENT 
router.get('/contains/:content', async(req, res, next)=>{
	try{
		const findAll = await CheatSheet.find({})

		if(!findAll) return res.status(404).send('Error, cannot be found')

		const filtered = findAll.filter((sheet)=>{
			if(!sheet.body) return
			return (sheet.body.toLowerCase().includes(req.params.content.toLowerCase()))
		})
		res.status(200).send(filtered)
	}
	catch(err){
		next(err)
	}
})

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
