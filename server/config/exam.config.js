// importing mongoose
const mongoose = require("mongoose");

// mongoose config to make connection
// mongoose will automatically make a database with whatever name is given so make sure db name is unique
mongoose.connect("mongodb://localhost/exam_api", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        // if connection is successful .then will run
        .then(() => console.log("Established a connection to the database"))
        // if connection is not successful .catch will run
        .catch(err => console.log("Something went wrong when connecting to the database", err));