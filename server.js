const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const items = require('./routes/api/items');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json()); //try express.json() instead later on

// Connect to DB
mongoose
    .connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected !'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server Running !'));