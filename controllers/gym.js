const knex = require("../db/knex.js");

module.exports = {


//CREATE GYM PAGE
  createGym: function(req, res) {
    console.log("session.pokemon:", req.session.pokemon);
    knex('pokemon').then((result) => {
      console.log("result", result[0].name);
      let pokemon1 = req.session.pokemon[0]
      let pokemon2 = req.session.pokemon[1]
      res.render("gym", {challenger1: pokemon1, challenger2: pokemon2, allpokemon: result});
    })
    .catch((err) => {
      console.error(err)
    });
  },

//UPDATE POKEMON - SELECT A POKEMON FROM THE DROP DOWN MENU IN THE GYM
  updateGym: function(req, res){
    req.session.pokemon = []
        console.log("req.body: ", req.body);
        req.session.pokemon.push(req.body)
        res.redirect('/')
    }
}

  
