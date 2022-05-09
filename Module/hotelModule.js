
const Hotel = require('../Model/Hotel');
const Joi = require('joi');


exports.posthotel= async (req,res,next)=>{
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
    const hotel = new Hotel({ 
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details,
        address: req.body.address,
    })
    try{
    var response=await hotel.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}

///////////////// get movie //////////////////
exports.gethotel = async (req,res,next)=>{
    const response = await Hotel.find();
    res.send(response);
}
 

exports.updatehotel = async (req,res,next)=>{
    const {hotelId} = req.params;   // object destructure
    const response = await Hotel.findByIdAndUpdate(hotelId,{
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details,
        address: req.body.address,
    });
    res.send(response);  
}


exports.deletehotel = async (req,res,next)=>{  
    const {hotelId} = req.params;   // object destructure
    const response = await Hotel.findByIdAndRemove(hotelId)
    res.send(response);
}