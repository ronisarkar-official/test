const express = require('express');
const app = express();
const cors = require('cors');
const corsOption = {
	origin: ['http://localhost:5173'],
};

app.use(cors(corsOption));

app.get('/api', (req, res) => {
	res.json({ fruts: ['apple', 'bann', 'orange'] });
});

app.listen(8080, () => {
	console.log('Server started on port 8080');
});
