const PetController = require("../controllers/pets.controller")


module.exports = app => {
    app.get("/api/pets", PetController.findAllPets);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.post("/api/pets", PetController.createPet);
    app.put("/api/pets/:id", PetController.updatePet);
    app.delete("/api/pets/:id", PetController.deletePet);
}