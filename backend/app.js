const express = require('express'); 
const cors = require('cors');
const dotenv = require('dotenv').config('./.env');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port number ${port}`));
