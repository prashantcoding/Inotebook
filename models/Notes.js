const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const Userschema = new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true,
       
    },
    tag:{
        type:String,
        
    },
    date:{
        type:String,
        default: Date.now
    }
})
module.exports=mongose.models('user',Userschema)