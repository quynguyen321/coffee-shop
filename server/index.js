require('dotenv').config()
const express = require('express')
const app = express()
const Sequelize = require('sequelize')
const {CONNECTION_STRING, SERVER_PORT} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})



app.use(express.static('public'))

// app.get('/api/products', (req, res) => {
// sequelize.query(`select * from product;`)
// .then(dbres=>{
//     console.log('hi')
//     res.status(200).send(dbres[0])
// })

// })

app.get('/', () =>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

const port = process.env.PORT || SERVER_PORT
app.listen(port, () => console.log(`up on ${port}`))


