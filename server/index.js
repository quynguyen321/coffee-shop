require('dotenv').config()

const express = require('express')
const app = express()
const Sequelize = require('sequelize')
const {CONNECTION_STRING, SERVER_PORT} = process.env
var path = require('path');
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

app.use(express.json())

let cartItems = []

app.get('/api/products', (req, res) => {
sequelize.query(`select * from product;`)
.then(dbres=>{
    console.log(dbres)
    res.status(200).send(dbres[0])
})

})

app.post('/api/cart', (req, res) =>{
    console.log(req.body)
    cartItems.push(req.body)
    res.sendStatus(200)
})

app.get('/api/cart', (req, res) =>{
    res.status(200).send(cartItems)
})

app.use(express.static('client'))
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const port = process.env.PORT || SERVER_PORT
app.listen(port, () => console.log(`up on ${port}`))


