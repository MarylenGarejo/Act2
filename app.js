const express = require('express');
const path = require('path');
const routes = require('./ROUTES/index');

const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'view')));

// Use the routes defined in index.js
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
