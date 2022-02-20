const AttributeDescription = require("./attributeDescription");
const ClassDescription = require("./classdescription");
const MetaRepository = require("./metaRepository");

module.exports = {
    generateForMongooseJS(baseDir) {
        //console.log(MetaRepository.getInstance().classList);

        for (const classDescription of Object.values(MetaRepository.getInstance().classList)) {
            console.log("Model: " + classDescription.name);

            for (const attrDescription of Object.values(classDescription.attributes)) {
                
                let name = attrDescription.name;
                let description = attrDescription.description;
                let dValue = attrDescription.defaultValue;
                let type = attrDescription.type;
                let mandatoryValue = attrDescription.mandatory;
                let uniqueValue = attrDescription.unique;

                // default value
                let defaultValue = '';
                if (dValue !== undefined) {
                    defaultValue = `,\n\tdefault: ${dValue}`;
                }

                // mandatory
                let mandatory = '';
                if (mandatoryValue) {
                    mandatory = `,\n\trequired: [true,\'${attrDescription.mandatoryMessage}\']`;
                }

                let unique = '';
                if (uniqueValue) {
                    unique = `,\n\tunique: true`;
                }

                console.log(`${name}:{\n\t/* ${description} */\n\ttype: ${type}${defaultValue}${mandatory}${unique}\n},`);

            }
        }

    },
    createClass(name) {
        return new ClassDescription(name);
    },
    createAttribute(name) {
        return new AttributeDescription(name);
    },
    register(description) {
        if (description.constructor === ClassDescription) {
            MetaRepository.getInstance().register(description);
        } else {
            throw new Error("Meta-Generate-Files:register#Invalid argument. Please pass ClassDescription");
        }
    }
}