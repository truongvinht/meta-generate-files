module.exports = class AttributeDescription {
    /**
     * Init new Attribute Description with a name
     * @param {String} name attribute name 
     */
    constructor(name) {
        this.name = name;
        this.description = '';
        this.unique = false;
        this.type = undefined;
        this.mandatory=false;
        this.mandatoryMessage = '';
        this.defaultValue = undefined;
        this.maxLength = undefined;
    }

    setDescription(description) {
        this.description = description;
    }

    setUnique(flag) {
        this.unique = flag;
    }

    setType(type) {

        if (type === String) {
            this.type = "String";
        } else if (type === Number) {
            this.type = "Number";
        } else if (type === Date) {
            this.type = "Date";
        } else {
            this.type = type;
        }

    }

    setMandatory(mandatory, mandatoryMessage) {
        this.mandatory = mandatory;
        this.mandatoryMessage = mandatoryMessage;
    }

    setDefaultValue(defaultValue) {
        this.defaultValue = defaultValue;
    }

    setMaxLength(maxLength) {
        this.maxLength = maxLength;
    }
}