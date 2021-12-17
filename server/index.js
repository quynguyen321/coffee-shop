

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
let contact = []

app.get('/api/products', (req, res) => {
sequelize.query(`select * from product;`)
.then(dbres=>{
    // console.log(dbres)
    res.status(200).send(dbres[0])
})

})

app.post('/api/cart', (req, res) =>{
    // console.log(req.body)
    cartItems.push(req.body)
    res.sendStatus(200)
})

app.get('/api/cart', (req, res) =>{
    res.status(200).send(cartItems)
})

app.post('/api/contact', (req, res) => {
    
    contact.push(req.body)
    console.log(contact)
    res.status(200).send('we got it thank you!')
    

})

app.delete('/api/cart', (req, res) =>{
    cartItems= [];
    // console.log(cartItems)
    res.status(200).send('item puschase')
})

app.use(express.static('client'))
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const port = process.env.PORT || SERVER_PORT
app.listen(port, () => console.log(`up on ${port}`))


