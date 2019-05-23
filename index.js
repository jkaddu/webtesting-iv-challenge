const express = require('express');
const db = require('./data/db.js');

const server = express();

server.use(express.json());

server.post('/api/users', (req, res) => {
	const newUser = req.body;
	console.log('request body: ', newUser);
	db
		.insert(newUser)
		.then((users) => {
			res.status(201).json(users);
		})
		.catch((err) => {
			res.status(500).json({ error: 'Error saving user to database' });
		});
});
