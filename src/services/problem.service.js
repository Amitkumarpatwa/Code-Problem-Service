const sanitizeMarkdownContent = require("../utils/markdownSanitizer.js");

class ProblemService{

    constructor(problemRepository){
        this.problemRepository=problemRepository;
    }
    async createProblem(problemData){
        
        // 1, sanitized the markdown for description
        problemData.description=sanitizeMarkdownContent(problemData.description);

        console.log("problem data:",problemData);
            

        const problem=await this.problemRepository.createProblem(problemData);
        console.log("Problem created",problem);
        
        return problem;
        

    }

    async getAllProblems(){
        
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        
    }
}

module.exports= ProblemService;