const express = require('express');
const app = express();
const morgan = require('morgan');

//require de rutas
const routes = require('./routes');

//settings
app.set('appName', "Mi primera app NodeJS");
app.set('views',__dirname+"/views");
app.set('view engine','ejs');

//middleware functions
app.use(morgan('dev'));

//rutas
app.use(routes);

//Escucha del sistema
app.listen(3000, () => {
	console.log("Servidor en línea!");
	console.log("Nombre de la app: ",app.get('appName'));
});

