const ClassDescription = require("./classdescription");

module.exports = class MetaRepository {
    /**
     * Constructor for Meta Repostory
     */
    constructor() {
        this.classList = {}
        MetaRepository.instance = this;
    }
    
    /**
     * Singleton instance to Meta Repository
     */
    static getInstance() {
        if (!MetaRepository.instance) {
            MetaRepository.instance = new MetaRepository();
        }
        return MetaRepository.instance;
    }

    /**
     * Register a ClassDesciption for code generation
     * @param {ClassDescription} classDescription 
     */
    register(classDescription) {
        if (classDescription.constructor === ClassDescription) {
            if (!Object.prototype.hasOwnProperty.call(this.classList, classDescription.name)) {
                this.classList[classDescription.name] = classDescription;
            } else {
                console.log(`${classDescription.name} is already registered.`);
            }
        } else {
            throw new Error("MetaRepository:register#Invalid argument. Please pass ClassDescription");
        }
    } 
}