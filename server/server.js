const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el servidor!' });
});

app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, name: "Proyecto 1", description: "Descripción", url: "#" },
    { id: 2, name: "Proyecto 2", description: "Descripción", url: "#" }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
