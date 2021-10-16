const express = require('express')
const User=require('../models/Users')
const bcrypt = require('bcryptjs')
const router=express.Router()

const jwt = require('jsonwebtoken');
const{body,validationResult} =require('express-validator')
const JWT_SECRET='Godisgood'
router.post('/createuser',[body('name','Enter a Valid Name').isLength({min:3}),
body('email').isEmail(),
body('password').isLength({min:7})

],async function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      
    
    let user=await User.findOne({ email: req.body.email});
    if(user){
      return res.status(400).json({error:"User with this email exists"})
    }
    const salt=await bcrypt.genSalt(10);
    secPass=await bcrypt.hash(req.body.password,salt);
    

    user=await User.create({
      
      name: req.body.name,
      password:secPass,
      email: req.body.email,
      date:req.body.date
    })
    const data ={
      id:user.id
    }
    const authToken=jwt.sign(data,JWT_SECRET);
    res.json({authToken})
  }catch (error) {
      console.error(error.message)
      res.status(500).json({error:"some error occured"})
    }
   
    
})
module.exports = router