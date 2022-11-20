const express = require("express")
const mongoose = require("mongoose")

const router = express.Router();
const userSchema = require("../models/loginschemaa")

router.post("/signup", async(req,res) =>{
    try{
      const{
          firstname,
            lastname,
            emailid,
            mobileno,
            country,
            password,
            confirmpassword,
      } = req.body; 
        console.log(req.body);
        // res.send(req.body);
       
        if (password === confirmpassword) {
          const userData = new userSchema({
            firstname,
            lastname,
            emailid,
            mobileno,
            country,
            password,
            confirmpassword,
          })
          userData.save(err=>{
            if (err) {
              console.log(err);
            }
          })
          res.redirect("/signup");
        }
        else{
          res.send("passwords not matching")
        }
     }catch(error){
       res.render("ahh! error occured")
     }
    });