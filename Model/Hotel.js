const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
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

const Hotel =mongoose.model('hotel', hotelSchema,'HotelCollection');
module.exports = Hotel;