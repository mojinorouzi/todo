//git is connect
const express = require('express'); 
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create app express
const app = express();



mongoose.connect('mongodb://localhost/items', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise;
//پرامیس مثل asynce awiat کار میکند وقتی اجرا نشه نمیره دستور بدی


// یوز متدی هست به معنی استفاده کردن 
//الان bady parser رو که اد کردیم به برنامه با متد یوز داریم استفاده میکنیم ازش تو ابجکت app که خودش از اکسپرش است
app.use(bodyParser.json());
//use api file
app.use('/api' , routes);
//error handling 
// if we dont use try catch we had for erorr handling used bottem code 
app.use((err , req , res , next)=>{
    res.status(422).send({error : err.message });
})
//  listen is method from createserver for create port for lost
// runing server and listen
app.listen(process.env.port || 4000  , ()=>{
console.log('hey im listen your request');
})






