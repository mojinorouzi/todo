const express  = require("express");
const Item =require("../models/items")

const router = express.Router();
//get requst
router.get('/test' , (req , res , next)=>{
    
    Item.find({}).then((items)=>{
        res.send(items);
    })
    
   /*
   Item.geoNear(
       {type : 'point' , coordinates : [parseFloat(req.query.lng) , parseFloat(req.query.lat) ]} , 
       {maxDistance : 10000 , spherical : true}
   ).then((items)=> {
       res.send(items) ; 
   });
   */
});
// add item
router.post('/test' ,async (req , res , next )=>{
    
     Item.create(req.body).then((item)=>{
         res.send(item);
     }).catch(next);
    /* //buttom code like top code for create table in db and save data
    var item = new Item(req.body);
    item.save();
    */

    
});
//update item
router.put('/test/:id' , (req , res , next)=>{
    Item.findOneAndUpdate({name : req.params.id} ,req.body).then((item)=>{
        res.send(item);
    });
    
})
// delete item
router.delete('/test/:id' , (req , res , next)=>{
    Item.findOneAndRemove({name : req.params.id}).then((item)=>{
        res.send(item);
    });
    
    
})



module.exports = router ; 