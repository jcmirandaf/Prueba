const express = require('express');
const stockController = require('./controllers/stock');
const app = express();

// Ruta GET sencilla
app.get('/', (req, res) => {
  res.send('Hello Ludovico!');
});

// Ruta GET sencilla
app.get('/api/inventario', (req, res) => {

  const data = stockController.getStock();
  res.json(data);
});

// Puerto en el que el servidor escuchará
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
