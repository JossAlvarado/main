const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  port: '3307',
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'BABYBLUE'
});

db.connect((err) => {
  if (err) {
    console.log('Error al conectar a MySQL:', err);
  } else {
    console.log('Conexión exitosa a MySQL');
  }
});

// Rutas CRUD para los registros de tenis
app.get('/shoes', (req, res) => {
  db.query('SELECT * FROM shoes', (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(result);
    }
  });
});

app.post('/shoes', (req, res) => {
  const { brand, model, color, number, price } = req.body;
  db.query(
    'INSERT INTO shoes (brand, model, color, number, price) VALUES (?, ?, ?, ?, ?)',
    [brand, model, color, number, price],
    (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(201).json(result);
      }
    }
  );
});

// Obtener todos los usuarios
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(result);
    }
  });
});

// Obtener un usuario por su ID
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(result[0]);
    }
  });
});
// Agregar un nuevo usuario
app.post('/users', (req, res) => {
    const { id, nombre, apellidos, correo, contraseña } = req.body;
    db.query(
      'INSERT INTO users (id, nombre, apellidos, correo, contraseña) VALUES (?, ?, ?, ?, ?)',
      [id, nombre, apellidos, correo, contraseña],
      (err, result) => {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          res.status(201).json({ message: 'Usuario registrado exitosamente' });
        }
      }
    );
  });
  
// Actualizar un usuario por su ID
app.put('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const { nombre, apellidos, correo, contraseña } = req.body;
  db.query(
    'UPDATE users SET nombre = ?, apellidos = ?, correo = ?, contraseña = ? WHERE id = ?',
    [nombre, apellidos, correo, contraseña, userId],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.json(result);
      }
    }
  );
});

// Eliminar un usuario por su ID
app.delete('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(result);
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
