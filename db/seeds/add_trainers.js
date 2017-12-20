exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('trainers').del(),

    // Inserts seed entries
    knex('trainers').insert({id: 1, name: "MARKEL" }),
    knex('trainers').insert({id: 2, name: "JACOB" }),
    knex('trainers').insert({id: 3, name: "ELLA" }),
    knex('trainers').insert({id: 4, name: "VALENCIA" })

  );
};
