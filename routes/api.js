const express  = require("express");
const Item =require("../models/items")

const router = express.Router();
//get requst
router.get('/test' , async(req , res , next)=>{
    try {
        await Item.find({}).then((items)=>{
            res.send(items);
        })
        
    } catch (error) {
        res.json(error)
        
    }
    
    
    
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
    
     try {
        await Item.create(req.body).then((item)=>{
            res.send(item);
        }).catch(next);
         
     } catch (error) {
         res.json(error)
         
     }
    /* //buttom code like top code for create table in db and save data
    var item = new Item(req.body);
    item.save();
    */

    
});
//update item
router.put('/test/:id' , async(req , res , next)=>{
    try {
        await Item.findOneAndUpdate({name : req.params.id} ,req.body).then((item)=>{
            res.send(item);
        });
        
    } catch (error) {
        res.json(error)
        
    }
    
    
})
// delete item
router.delete('/test/:id' , async(req , res , next)=>{
    try {
        await Item.findOneAndRemove({name : req.params.id}).then((item)=>{
            res.send(item);
        });
        
    } catch (error) {
        res.json(error)
    }
    
    
    
})



module.exports = router ; 