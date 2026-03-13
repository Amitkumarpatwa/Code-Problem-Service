// const Problem=require('../models');

const NotFound = require("../errors/notfound.error.js");
const { Problem } = require("../models/index.js");

class ProblemRepository{

    async createProblem(problemData){
        try {
            const problem= await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases)?problemData.testCases:[]
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
}

    async getProblem(id){
        try {
            const problem= await Problem.findById(id);
            
            return problem;
        } catch (error) {
            if (error.name === "CastError") {
                throw new NotFound("Problem", id);
            }
            console.log(error);
            
            throw error;
        }
    }
}

module.exports=ProblemRepository;