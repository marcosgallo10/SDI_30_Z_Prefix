/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, first_name: 'Marcos', last_name:'Gallo', user_name: 'marcos_gallo', password:'password' },
  ]);
};
