const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const ideas = require('./routes/api/ideas');
app.use('/api/ideas', ideas);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server stared on port ${port}`));