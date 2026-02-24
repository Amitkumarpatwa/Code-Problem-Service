const express=require('express');
const bodyParser=require('body-parser')

const {PORT}=require('./config/server.config');
const apiRouter = require('./routes/index');
// const BaseError = require('./errors/baseError');
const errorHandler = require('./utils/errorHandeler');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

// If any request comes and route start with /api we map it apiRouter
app.use('/api',apiRouter);

app.get('/ping',(req,res)=>{
    return res.json({message:"Problem service is alive"})
})

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server started at PORT: ${PORT}`);
    
})