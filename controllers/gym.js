const knex = require("../db/knex.js");

module.exports = {

  main: function(req, res) {
     let in_gym_true = [];
     let in_gym_false = [];
     console.log("session.pokemon:", req.session.pokemon);
     knex('pokemon').then((results) => {
       for (let i = 0; i < results.length; i++) {
         if (results[i].in_gym == true) {
           in_gym_true.push(results[i])
         } else {
           in_gym_false.push(results[i])
         }
       }
       res.render('gym', {in_gym_false:in_gym_false, in_gym_true:in_gym_true});
     })
   },
   addGym: function(req, res) {
   knex('pokemon').where('id', req.body.id).update({in_gym: true})
     .then((results) => {
       if (req.session.pokemon[0].p1 == undefined) {
         req.session.pokemon[0].p1 = req.body.id
       } else {
         req.session.pokemon[0].p2 = req.body.id
       }
     res.redirect('/gym');
   })
 },

 removeGym: function(req, res) {
   knex('pokemon').where('id', req.body.id).update({in_gym: false})
     .then((results) => {
     res.redirect('/gym');
   })
 },

 reset: function(req, res) {
   console.log("req.body: ", req.body);
   knex('pokemon').update({in_gym:false})
     .then(() => {
       req.session.pokemon = [{}];
       res.redirect('/gym');
     })
 },

}
