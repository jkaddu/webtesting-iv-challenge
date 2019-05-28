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

server.delete('/api/users/:id', (req, res) => {
	const { id } = req.params;

	db
		.remove(id)
		.then((deleted) => {
			if (deleted === 0) {
				res.status(404).json({ error: 'User ID does not exist.' });
			}
			res.status(204).json.end();
		})
		.catch((err) => {
			res.status(500).json({ error: 'User could not be removed' });
		});
});
