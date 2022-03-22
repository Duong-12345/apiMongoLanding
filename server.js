// require('dotenv').config()
const express = require('express')
var bodyParser = require('body-parser')

const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const connnecttionURL = 'mongodb+srv://duong0502:duong123@cluster0.xkad9.mongodb.net/organizationStructure?retryWrites=true&w=majority'
mongoose.connect(connnecttionURL,{useNewUrlParser: true})
app.use(cors())
const db = mongoose.connection
// console.log(db)
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log('Db connected'))

const api = require('./routes/api')
app.use(bodyParser.json())
app.use('/api', api)



// const buildDir = path.join(__dirname, '../build');
// console.log('Using files in ' + buildDir);

// const subDir = '/';
// const logRequests = false;

// if (subDir === '/') {
//     console.log('The server config assuming it is serving at the server root. You can control this with the `subDir` variable in index.js.');
// } else {
//     console.log('The server config assuming it is serving at \'' + subDir + '\'.');
// }

// if (logRequests) {
//     console.log('The server will log all incoming request. It\'s not recommended for production use.');
// }

// // Serve the static files from the React app
// app.use(subDir, express.static(buildDir));
// // Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//     if (logRequests) {
//         console.log(req.method + ' ' + req.url);
//     }
//     res.sendFile(path.join(buildDir, 'index.html'));
// });
let PORT = process.env.PORT || 8000
app.listen(PORT,()=> console.log('Server Started' ,PORT))