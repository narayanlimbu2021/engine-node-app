const express=require('express');
const { add } = require('nodemon/lib/rules');

const app=express();

app.get("/home", (req,res)=>{
    res.send('This is test node js app');
})

app.listen(3000, ()=>{
    console.log('App is listening on port 3000')
})