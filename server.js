const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

// Serve menu data for a specific restaurant as mock API
app.get('/api/menu', (req, res) => {
  const menuPath = path.join(__dirname, 'menu.json');
  fs.readFile(menuPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Could not load menu data' });
    } else {
      // If data is valid JSON, send it
      try {
        const menu = JSON.parse(data);
        res.json(menu);
      } catch (e) {
        res.status(500).json({ error: 'Menu file is not valid JSON' });
      }
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
