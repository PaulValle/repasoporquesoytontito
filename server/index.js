const express = require('express');
const morgan = require('morgan');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/worker', require('./routes/workers.routes'));
app.use('/mascota', require('./routes/mascotas.routes'));
// starting the server
app.listen(app.get('port'), () => {
console.log(`server on port ${app.get('port')}`);
});