const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const villasSchema = new Schema({
    name :{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
    photo:{
        type:String,
        required:true  
    },
    price:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },

    details:{
        type:String,
        required:true
    },
    

})

const Villas =mongoose.model('villas', villasSchema ,'villasCollection');
module.exports = Villas;