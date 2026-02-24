const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');

function pingProblemController(req,res,next){
    return res.json({message:"Ping Controller is up"});
}
function addProblem(req,res,next){
      try{
        //nothing implemented
        throw new NotImplemented("addProblem");
    }catch(error){
        next(error)
    }

}

function getProblem(req,res,next){
    try{
        //nothing implemented
        throw new NotImplemented("getProblem");
    }catch(error){
        next(error)
    }
}

function getProblems(req,res,next){
    try{
        //nothing implemented
        throw new NotImplemented("getProblems");
    }catch(error){
        next(error)
    }
}

function deleteProblem(req,res,next){
    try{
        //nothing implemented
        throw new NotImplemented("deleteProblem");
    }catch(error){
        next(error)
    }
}

function updateProblem(req,res,next){
    try{
        //nothing implemented
        throw new NotImplemented("updateProblem");
    }catch(error){
        next(error)
    }
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController

}