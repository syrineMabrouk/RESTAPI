const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema');


  router.post('/ManyUsers',async (req,res)=> {
    try{
      const data= await User.create(req.body)
res.send('user created')
    }
    catch(err){
      res.status(500).json({error:err.message})
    }
  })


  router.get('/Users',(req,res)=>{
    User.find({},(err,data)=>err? console.log(err) : res.json(data))
  })

  router.post('/NewPerson', (req,res) => {
    const newPerson = new User(req.body)
    newPerson
    .save()
    .then(() => res.send('Record saved'))
    .catch(err => res.status(400).json(err.message))
  })

  router.put('/:id',(req,res)=>{
    User.findOneAndUpdate({_id: req.params.id},{$set:{age:18}},{new:true},(err,data)=>
    err? console.log(err) : res.json(data))
  })

 
  router.delete('/:PersonID',(req,res)=>{
    User.findByIdAndRemove(req.params.PersonID,(err,data)=>err? console.log(err) : res.send('Person is deleted'))
  })
module.exports= router