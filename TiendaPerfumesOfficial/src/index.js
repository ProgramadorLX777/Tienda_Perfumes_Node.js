// Definiciones de variables de nuestro servidor:
const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const morgan = require('morgan');
const config = require('./config/config');

// Objetos del sistema:
const app = express();
const port = 5000;

// Settings:
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(morgan('dev'));
app.use(routes)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Definicion de puerto de escucha del servidor:
app.listen(port,() => {
    console.log(`[*] Servidor Iniciado en: http://localhost:${port}`);
});