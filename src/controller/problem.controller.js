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
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    });
}

function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    });
}

function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    });
}

function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    });
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController

}