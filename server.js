require('dotenv').config()
const express = require('express')
var bodyParser = require('body-parser')

const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
// const connnecttionURL = 'mongodb+srv://duong0502:duong123@cluster0.xkad9.mongodb.net/organizationStructure?retryWrites=true&w=majority'
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})
app.use(cors())
const db = mongoose.connection
// console.log(db)
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log('Db connected'))

const api = require('./routes/api')
app.use(bodyParser.json())
app.use('/api', api)
let PORT = process.env.PORT || 3001
app.listen(PORT,()=> console.log('Server Started'))