const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const { ProblemRepository } = require('../repositories/index.js');
const { ProblemService } = require('../services/index.js');

const problemService= new ProblemService(new ProblemRepository());



function pingProblemController(req,res,next){
    return res.json({message:"Ping Controller is up"});
}
async function addProblem(req,res,next){
      try{
        console.log('incoming req body',req.body);
        
        const newProblem=await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message :'Successfully created a new problem',
            error:{},
            data:newProblem
        })
    }catch(error){
        next(error)
    }

}

async function getProblem(req,res,next){
    try{
        const problem= await problemService.getProblem(req.params.id);
        if (!problem) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false,
                error:{},
                message:"Problem not found",
                data:{}
            });
        }
        return res.status(StatusCodes.OK).json({
            success:true,
            error:{},
            message:"Successfully fetched a problem",
            data:problem
        })
    }catch(error){
        next(error)
    }
}

async function getProblems(req,res,next){
     try{
        const response= await  problemService.getAllProblems();
      
        
        return res.status(StatusCodes.OK).json({
            success: true,
            message :'Successfully fetched all the problems',
            error:{},
            data:response
        });
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