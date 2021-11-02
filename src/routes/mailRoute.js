const express=require('express');
const mailRoute= express.Router();
var nodemailer = require('nodemailer');
const greetingsdata=require('../model/greetingsdata');



mailRoute.get("/", function(req,res){
 res.render('mail')

});



mailRoute.post("/", function(req,res)
{

  var Item={
  from:req.body.from, 
  name:req.body.user,
  mail:req.body.email
  }

  console.log(Item);
  var greetings= greetingsdata(Item);
  greetings.save();
   
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rock2021kvsk@gmail.com',
      pass: 'Test@13579'
    }
  });
  const message = {
    from: 'rock2021kvsk@gmail.com', // Sender address
    to:Item.mail,     
    subject:  "Diwali greetings from "+ Item.from,
    text: "Happy Diwali" 
};
transporter.sendMail(message, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  res.render('greetings',{Uname:Item.name});
  }
})

});


 module.exports=mailRoute;