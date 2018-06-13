//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const trainers = require("../controllers/trainers.js");
const gym = require("../controllers/gym.js");

module.exports = function(app){

  app.use(function(req,res, next){
    console.log("here");
    if(!req.session.pokemon){
      req.session.pokemon = [];
    }
    next()
  });

//GET ROUTE FOR MAIN INDEX PAGE
  app.get('/', pokemon.index);

//GET ROUTE FOR LISTING OF ALL POKEMON AND THEIR PROPERTIES
  app.get('/pokemon', pokemon.getAll);

//GET ROUTE FOR SHOWING LISTING OF ONE POKEMON AND IT 'S PROPERTIES
  app.get('/show/:id', pokemon.showAll);

//GET ROUTE FOR ADDING/ASSIGNING A POKEMON TO THE GYM
  app.get('/pokemon/addToGym/:id', pokemon.addToGym);

//GET ROUTE FOR REMOVING A POKEMON FROM THE GYM
  app.get('/pokemon/removeFromGym/:id', pokemon.removeFromGym);

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

//GET ROUTE FOR GYM MAIN PAGE
    app.get('/gym', gym.main);

//POST ROUTE FOR ADDING POKEMON ON THE GYM PAGE
    app.post('/gym/add', gym.addGym);

//POST ROUTE FOR REMOVING POKEMON FROM THE GYM
    app.post('/gym/remove', gym.removeGym);

//GET ROUTE FOR CLEARING ANY POKEMON FROM THE GYM
    app.get('/gym/reset', gym.reset);

 //GET ROUTE FOR LISTING ALL THE TRAINERS
  app.get('/trainers', trainers.getTrainers);

//GET ROUTE FOR SHOWING ALL THE  POKEMON IN TRAINING FOR A SPECIFIC TRAINER
  app.get('/show/trainer/:id', trainers.showTrainers);

 }
