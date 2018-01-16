const knex = require("../db/knex.js");

module.exports = {


//CREATE GYM PAGE
  createGym: function(req, res) {
    console.log("session.pokemon:", req.session.pokemon);
    let pokemon1 = req.session.pokemon[0] || { name: "Select a pokemon"};
    let pokemon2 = req.session.pokemon[1] || { name: "Select a pokemon"};
    // res.render("gym", {challenger1: req.session.pokemon[0], challenger2: req.session.pokemon[1]});
    res.render("gym", {challenger1: pokemon1, challenger2: pokemon2});
  },

//UPDATE POKEMON - SELECT A POKEMON FROM THE DROP DOWN MENU IN THE GYM
  updateGym: function(req, res){
    req.session.pokemon = []
        console.log("req.body: ", req.body);
        req.session.pokemon.push(req.body)
        res.redirect('/')
    }
}
