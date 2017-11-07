const knex = require("../db/knex.js");

module.exports = {

  // GET LISTING OF TRAINERS
  getTrainers: function(req, res) {
    knex('trainers').then((result) =>{

      res.render('trainers', {tra: result});
    })
  },

  //SHOW POKEMON CURRENTLY IN TRAINING FOR A SPECIFIC TRAINER
  showTrainers: function(req, res){
    knex('trainers')
      .where('id', req.params.id)
      .then((trainers)=>{

        knex('pokemon')
          .where('trainer_id', trainers[0].id)
          .then((traineeList)=>{

            res.render('showTrainers', {trainerPokemon: trainers[0], trainees: traineeList});
          })
    })
  },
}
