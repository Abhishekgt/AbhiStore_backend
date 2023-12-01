const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose')
const CustomerModel = require('./models/Customer')


//middlewares
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Customer")

app.post('/signin', (req,res) =>{
    const {email, password} = req.body;
     CustomerModel.findOne({email: email})
     .then(user => {
        if (user) {
            if(user.password === password) {
                res.json("Success")
            } 
            else{
                res.json("the password is incorrect")
            }
        } 
        else{
            res.json("No record existed")
        }
        
     })
     .catch(err => res.json(err))
})
app.post('/signup', (req,res) =>{
     CustomerModel.create(req.body)
     .then(Customer => res.json(Customer))
     .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")

})
