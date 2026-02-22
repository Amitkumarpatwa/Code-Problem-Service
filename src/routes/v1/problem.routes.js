const express=require('express')

const {problemController}=require('../../controller')

const problemRouter=express.Router();
// If any request comes and route start with /ping we map it pingProblemController

problemRouter.get('/ping',problemController.pingProblemController);

problemRouter.get('/:id',problemController.getProblem);

problemRouter.get('/',problemController.getProblems);

problemRouter.post('/:id',problemController.addProblem);

problemRouter.delete('/:id',problemController.deleteProblem);

problemRouter.put('/:id',problemController.updateProblem);

module.exports=problemRouter;
