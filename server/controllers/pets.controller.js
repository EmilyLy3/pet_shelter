const Pet = require("../models/pets.model")


module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => {
            res.json({results: allPets})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(foundPet => res.json({results: foundPet}))
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPetObj => {
            res.json({results: newPetObj})
        })
        .catch(err => {
            res.json({err: err})
        })
}


module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params.id}, // finding object by id
        req.body, // passing information from the form to update with
        {new: true, runValidators: true} // new: true displays the updated info and runValidators makes sure updated info conforms to validations
    )
        .then(updatedPet => {
            res.json({results: updatedPet})
        })
        .catch(err => {
            res.json({err: err})
        })
}


module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet => {
            res.json({results: deletedPet})
        })
        .catch(err => {
            res.json({err: err})
        })
}