const express = require('express');
const { Pool } = require('pg');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// PostgreSQL connection
const pool = new Pool({
  user: 'cookingAdmin',
  host: 'postgres',
  database: 'cookblogdb',
  password: 'cookingPass',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('PostgreSQL connection error', err.stack));

// MongoDB connection
mongoose.connect('mongodb://mongodb:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error', err));

app.get('/', (req, res) => {
  res.send('Hello from Node.js with PostgreSQL and MongoDB!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
