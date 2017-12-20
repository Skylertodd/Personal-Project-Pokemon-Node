exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pokemon').del(),

    knex('pokemon').insert({id: 500, name: "BULBASAUR",
      cp: 15, in_gym: false, trainer_id: 1 }),
    knex('pokemon').insert({id: 501, name: "IVYSAUR",
      cp: 60, in_gym: false, trainer_id: 1}),
    knex('pokemon').insert({id: 502, name: "VENASAUR",
      cp: 100, in_gym: false, trainer_id: 2}),
    knex('pokemon').insert({id: 503, name: "CHARMANDER",
      cp: 15, in_gym: false, trainer_id: 2}),
    knex('pokemon').insert({id: 504, name: "CHARMELEON",
      cp: 55, in_gym: false, trainer_id: 2}),
    knex('pokemon').insert({id: 505, name: "CHARIZARD",
      cp: 99, in_gym: false, trainer_id: 3}),
    knex('pokemon').insert({id: 506, name: "SQUIRTLE",
      cp: 19, in_gym: false, trainer_id: 4}),
    knex('pokemon').insert({id: 507, name: "WARTORTLE",
      cp: 22, in_gym: false, trainer_id: 4}),
    knex('pokemon').insert({id: 508, name: "BLASTOISE",
      cp: 111, in_gym: false, trainer_id: 4}),
    knex('pokemon').insert({id: 509, name: "CATERPIE",
      cp: 5, in_gym: false, trainer_id: 3}),
    knex('pokemon').insert({id: 510, name: "METAPOD",
      cp: 18, in_gym: false, trainer_id: 1}),
    knex('pokemon').insert({id: 511, name: "BUTTERFREE",
     cp: 104, in_gym: false, trainer_id: 1})
  );
};
