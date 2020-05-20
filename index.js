const express = require('express'); 
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create app express
const app = express();



mongoose.connect('mongodb://localhost/items', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise;



app.use(bodyParser.json());
//use api file
app.use('/api' , routes);
//error handling 
app.use((err , req , res , next)=>{
    res.status(422).send({error : err.message });
})

// runing server and listen
app.listen(process.env.port || 4000  , ()=>{
console.log('hey im listen your request');
})






