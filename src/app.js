// app.js
const express = require('express');
const app = express();
const carRoutes = require('./routes/carRoutes');
const logger = require('./utils/logger');
// Middleware to parse JSON requests
app.use(express.json());

app.use(logger);

// Example route for cars (you can add more routes as needed)
app.use('/api/cars', carRoutes);

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Export the app for server.js to use
module.exports = app;
