const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const port = 3000;

const cors = require('cors');
const { application } = require('express');
const app = express();
const bodyParser = require('body-parser')

// para que no bloqueara la solicitud htpp ya que es solamente de prueba
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json');

    next();
  });
  

// Connect to MySQL
const connection = require('./db.js');


connection.connect((err) => {
    if (err) throw err;
    console.log('Successfully connected to the database.'); 
});

// Configuración del middleware de análisis de cuerpo
app.use(bodyParser.json());

// Rutas
app.get('/sucursales', (req, res) => {
  connection.query('SELECT * FROM sucursal', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});


app.post('/cargar-archivo', (req, res) => {
  console.log('entro al CARGAR ARCHIVO ');
  const empresa = req.body.empresa;
  const sucursales = empresa.sucursales;

// Insertar datos de la empresa
connection.query(
  'INSERT INTO empresa (nombre, pais) VALUES (?, ?)',
  [empresa.nombre, empresa.pais],
  (error, results, fields) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Empresa insertada');

    // Obtener el id de la empresa recién insertada
    const empresa_id = results.insertId;

    // Insertar datos de las sucursales y colaboradores
    for (const sucursal of sucursales) {
      connection.query(
        'INSERT INTO sucursal (nombre, direccion, telefono, empresa_id) VALUES (?, ?, ?, ?)',
        [sucursal.nombre, sucursal.direccion, sucursal.telefono, empresa_id],
        (error, results, fields) => {
          if (error) {
            console.error(error);
            return;
          }
          console.log('Sucursal insertada');
          const colaboradores = sucursal.colaboradores;
          for (const colaborador of colaboradores) {
            connection.query(
              'INSERT INTO colaborador (nombre, CUI, sucursal_id) VALUES (?, ?, ?)',
              [colaborador.nombre, colaborador.CUI, results.insertId],
              (error, results, fields) => {
                if (error) {
                  console.error(error);
                  return;
                }
                console.log('Colaborador insertado');
              }
            );
          }
        }
      );
    }
  }
);
});

app.put('/sucursales/:id', (req, res) => {
  const id = req.params.id;
  const nombre = req.body.nombre;
  const direccion = req.body.direccion;
  const telefono = req.body.telefono;
  const email = req.body.email;

  connection.query('UPDATE sucursal SET nombre = ?, direccion = ?, telefono = ?, email = ? WHERE id = ?', [nombre, direccion, telefono, email, id], (error, results, fields) => {
    if (error) throw error;
    res.send('Sucursal actualizada exitosamente');
  });
});

app.delete('/sucursales/:id', (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM sucursal WHERE id = ?', [id], (error, results, fields) => {
    if (error) throw error;
    res.send('Sucursal eliminada exitosamente');
  });
});

// Inicio del servidor
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto ' + port);
});



