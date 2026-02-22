const express=require('express');
const problemRouter=require('./problem.routes')

const v1router=express.Router();

v1router.use('/problems',problemRouter);

module.exports=v1router;
