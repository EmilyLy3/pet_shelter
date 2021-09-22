const mongoose = require("mongoose");

// instructions for what the table should look like
const PetsSchema = new mongoose.Schema({
    // specify fields that the table should have with or without validations
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Type is required!"],
        minlength: [3, "Type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
})

// register the above code as a table in mongodb
const Pet = mongoose.model("Pet", PetsSchema )

module.exports = Pet;