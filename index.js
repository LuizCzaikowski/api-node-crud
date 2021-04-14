const express = require('express')
const app = express()
const consign = require('consign')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('sqlite::memory')

sequelize.sync({ force:true })

app.use(express.json())
app.set('sequelize', sequelize);

consign()
    .include('models')
    .then('controllers')
    .into(app)

app.get('/', function (request, response) {
    response.send('<h1>Api Node</h1>');
});

app.listen(3000)