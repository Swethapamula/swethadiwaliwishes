const express=require('express');
const greetingRoute= express.Router();
const greetingsdata=require('../model/greetingsdata');



greetingRoute.get('/' ,function(req,res)
{
    res.render('greetings',{
        Uname:""
    }
)
})
greetingRoute.get('/id' ,function(req,res)
{ 
    console.log("inside id");
    res.render('greetings')
})

greetingRoute.post("/", function(req,res){

    var Item={
    user:req.body.user,
    email:req.body.email
    }
    var greetings= greetingsdata(Item);
    greetings.save();
    res.render("greetings" ,
    {
      Uname:Item.user 
    })
  });
  
  module.exports=greetingRoute;