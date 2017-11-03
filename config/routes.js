//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const trainers = require("../controllers/trainers.js");


module.exports = function(app){

  app.get('/', index.main);

  // app.get('/', pokemon.main);

  app.get('/pokemon', pokemon.main);

  app.get('/pokemon/show/:id', pokemon.show);

  app.get('/pokemon/new', pokemon.new);

  app.post('/pokemon/add', pokemon.add);

  app.get('/pokemon/delete/:id', pokemon.delete);

  app.get('/pokemon/edit/:id', pokemon.edit);

  app.post('/pokemon/change/:id', pokemon.change);

  app.get('/trainers', trainers.list);

  app.get('/show/trainer/:id', trainers.show);
}
