const express = require('express');
const cors = require('cors');

const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

require('./src/Routes/index')(app);

app.use(cors());
app.use(express.json());
app.listen(3333);

// PARA RODAR O SERVIDOR
// nodemon server.js