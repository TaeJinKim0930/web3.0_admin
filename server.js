require('dotenv').config();
const express = require('express');
const compression = require('compression');
const router = express.Router();
const cors = require('cors');
const database = require('./src/db/connection');

const routes = require('./src/routers/router.js')

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(compression());
app.use('/api/v1', routes);

app.get('/', (req, res) => {
    res.send(",World Hello");
});

app.use(express.json());
app.use(compression());

app.listen(port, () => console.log(`Server Listening : ${port}`));
