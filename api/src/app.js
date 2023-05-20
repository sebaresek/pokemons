const express = require('express'); // crea un servidor de Node.js
const cookieParser = require('cookie-parser');  //middleware analiza las cookies en las solicitudes entrantes y las convierte en un objeto que se puede acceder en req.cookies.

const bodyParser = require('body-parser');  //middleware analiza el cuerpo de la solicitud HTTP y lo convierte en un objeto JavaScript que se puede acceder en req.body

const morgan = require('morgan'); //middleware se utiliza para registrar solicitudes HTTP en la consola de la aplicación

const routes = require('./routes/index.js'); // archivo de rutas

require('./db.js'); // establece la conexión con la base de datos
const server = express();
server.name = 'API';



server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); //Configura el servidor para que analice y decodifique datos codificados en formato de URL.

server.use(bodyParser.json({ limit: '50mb' })); //Configura el servidor para que analice y decodifique datos en formato JSON.

server.use(cookieParser()); //Configura el servidor para que analice y decodifique cookies.

server.use(morgan('dev')); //Configura el servidor para que registre solicitudes HTTP en la consola de salida

server.use(express.json());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://pokemons-rose.vercel.app'); // /Autorizo recibir solicitudes de este dominio
  res.header('Access-Control-Allow-Credentials', 'true'); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');  //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});


server.use('/', routes); //Asocia las rutas definidas en el archivo ./routes/index.js con el servidor.

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
