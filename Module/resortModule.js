
const Resort = require('../Model/Resort');
const Joi = require('joi');


exports.postresort= async (req,res,next)=>{
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
    const resort = new Resort({ 
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details,
        address: req.body.address,
    })
    try{
    var response=await resort.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}

///////////////// get movie //////////////////
exports.getresort = async (req,res,next)=>{
    const response = await Resort.find();
    res.send(response);
}
 

exports.updateresort = async (req,res,next)=>{
    const {resortId} = req.params;   // object destructure
    const response = await Resort.findByIdAndUpdate(resortId,{
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details,
        address: req.body.address,
    });
    res.send(response);  
}


exports.deleteresort = async (req,res,next)=>{  
    const {resortId} = req.params;   // object destructure
    const response = await Resort.findByIdAndRemove(resortId)
    res.send(response);
}