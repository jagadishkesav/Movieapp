const { sequelize } = require('./models');
const express = require('express'); 
const cors = require('cors');
const dotenv = require('dotenv').config('./.env');
const app = express();

const login = require('./routes/login_route');

app.use(cors());
app.use(express.json());
app.use('/login', login)

async function main(){
    // await sequelize.sync({alter: true}); 
    await sequelize.sync();
    // await sequelize.sync({force: true});
}
main();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port number ${port}`));
