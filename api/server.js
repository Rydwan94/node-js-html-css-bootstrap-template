const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Umożliwia CORS, jeśli frontend i backend są na różnych domenach
app.use(express.json()); // Do obsługi danych JSON

// Załaduj zmienne środowiskowe
require('dotenv').config();

// Serwowanie statycznych plików frontendu
app.use(express.static(path.join(__dirname, '../client')));

// Trasa API (przykład)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Uruchomienie serwera
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});