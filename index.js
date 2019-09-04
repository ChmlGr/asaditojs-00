const express = require('express');
const path = require('path');
const health = require('./service/routes/health');
const anime = require('./service/routes/anime');

const app = express();

/** API ROUTES */
app.use('/api/ping', health);
app.use('/api/anime', anime);


/** FRONTEND */
app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Initialize server
app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});

module.exports = app;
