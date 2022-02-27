const express=require('express');
const { add } = require('nodemon/lib/rules');

const app=express();

app.get("/", (req,res)=>{
    res.send('This is test node js app');
})

app.listen(4000, ()=>{
    console.log('App is listening on port 4000')
})