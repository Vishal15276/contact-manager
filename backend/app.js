const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const db = require('./config/dbConfig');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', contactRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
