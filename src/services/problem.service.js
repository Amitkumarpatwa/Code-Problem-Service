const sanitizeMarkdownContent = require("../utils/markdownSanitizer.js");

class ProblemService{

    constructor(problemRepository){
        this.problemRepository=problemRepository;
    }
    async createProblem(problemData){
        try {
        // 1, sanitized the markdown for description
        problemData.description=sanitizeMarkdownContent(problemData.description);

        console.log("probelem data:",problemData);
            

        const problem=await this.problemRepository.createProblem(problemData);
        console.log("Problem created",problem);
        
        return problem;
        } catch (error) {
            console.log(error);
            throw error;
            
        }

    }
}

module.exports= ProblemService;