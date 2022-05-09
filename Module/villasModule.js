
const Joi = require('joi');
const Villas = require('../Model/Villas');


exports.postvillas= async (req,res,next)=>{
    //joi validate schema
        const schema = Joi.object({
            name: Joi.string().min(1).max(30).required(),
            photo: Joi.string().required(),
            price: Joi.string().required(),
            details: Joi.string().required(),
            address:Joi.string().required(),
    })
    // joi validate input data
    var {error} = await schema.validate(req.body);
    if(error){
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success')
    
    ////////////////// save data in mongodb using mongoose //////////////
    const villas = new Villas({ 
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details,
        address: req.body.address,
    })
    try{
    var response=await villas.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}

///////////////// get movie //////////////////
exports.getvillas = async (req,res,next)=>{
    const response = await Villas.find();
    res.send(response);
}
 

exports.updatevillas = async (req,res,next)=>{
    const {villasId} = req.params;   // object destructure
    const response = await Villas.findByIdAndUpdate(villasId,{
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details,
        address: req.body.address,
    });
    res.send(response);  
}


exports.deletevillas = async (req,res,next)=>{  
    const {villasId} = req.params;   // object destructure
    const response = await Villas.findByIdAndRemove(villasId)
    res.send(response);
}