//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const trainers = require("../controllers/trainers.js");

module.exports = function(app){
//GET ROUTE FOR MAIN INDEX PAGE
  app.get('/', pokemon.index);

//GET ROUTE FOR LISTING OF ALL POKEMON AND THEIR PROPERTIES
  app.get('/pokemon', pokemon.getAll);

//GET ROUTE FOR SHOWING LISTING OF ONE POKEMON AND IT 'S PROPERTIES
  app.get('/show/:id', pokemon.showAll);

//GET ROUTE FOR CREATE PAGE
  app.get('/pokemon/create', pokemon.create);

//POST ROUTE FOR CREATING AND ADDING NEW POKEMON
  app.post('/pokemon/createNew', pokemon.createNew);

//GET ROUTE DELETE POKEMON FROM PAGE
  app.get('/delete/:id', pokemon.delete);

//GET ROUTE FOR THE EDIT FORM USED TO MAKE CHANGES IN THE  POKEMON PROPERTIES
  app.get('/editNew/:id', pokemon.editNew);

//POST ROUTE FOR UPDATING POKEMON PROPERTIES
  app.post('/update/:id', pokemon.update);

 //GET ROUTE FOR LISTING ALL THE  TRAINERS
  app.get('/trainers', trainers.getTrainers);

//GET ROUTE FOR SHOWING ALL THE  POKEMON IN TRAINING FOR A SPECIFIC TRAINER
  app.get('/show/trainer/:id', trainers.showTrainers);

 }
