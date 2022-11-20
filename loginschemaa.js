const mongoose = require("mongoose");
const validator = require("validator");



const loginschemaa = new mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
   
    emailid: {
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("No such email exists.");
            }
        }
    },
    mobileno:{
        type:Number
        // required:true
    },
    country:{
        type:String
        // required:true
    },
   
    password:{
        type:String
        // required:true
    },
    confirmpassword:{
        type:String
        // required:true
    }
    // img:{
    //     data:Buffer,
    //     contentType: String,
    // }
});

//we will create a new connection

const soldier = new mongoose.model('soldier', loginschemaa);
module.exports = soldier;