const AttributeDescription = require("./attributeDescription");

module.exports = class ClassDescription {
    /**
     * Init new Class Description with a name
     * @param {String} name class name 
     */
    constructor(name) {
        this.name = name;
        this.attributes = {};
    }

    setAttribute(description) {
        if (description.constructor === AttributeDescription) {
            this.attributes[description.name] = description;
        } else {
            throw new Error("ClassDescription:setAttribute#Invalid argument. Please pass AttributeDescription");
        }
    }
}