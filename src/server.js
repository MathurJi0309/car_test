// server.js
const app = require('./app'); // Import the Express app
const port = process.env.PORT || 5000; // Port from environment variables or default to 5000

// Start the server
app.listen(port, () => {
  console.log(`
    💻 Server initiated at http://localhost:${port} 💻
    Keep calm and code on! 😎
  `);
});
