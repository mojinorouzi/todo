// models and schema we use mongo ,  mongo`s type is no-sql database
const mongoose =  require('mongoose');

const schema = mongoose.Schema ; 





const itemSchema = new schema({
    name :{
        type : String ,
        required : [true , 'name field is required'] 
    } , 
    lastName : {
        type : String 

    } , 
    available :{
        type : Boolean , 
        default : false 
    } , 
    



});

const item = mongoose.model('items' , itemSchema);

module.exports = item ; 