const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 3000;

// Route
app.get('/', (req, res) => {
  res.json({ message: "Hello world,we are liveee" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
