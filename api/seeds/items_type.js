/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {id: 1, user_id: 1, item_name:'Laptop', description: 'HP', quantity: 10 },
    {id: 2, user_id: 1, item_name:'Monitor', description: 'Dell', quantity: 20 },
    {id: 3, user_id: 1, item_name:'Keyboard', description: 'HP', quantity: 10 },
    {id: 4, user_id: 1, item_name:'Mouse', description: 'HP', quantity: 10 },
    {id: 5, user_id: 1, item_name:'Docking Station', description: 'HP', quantity: 10 },
  ]);
};
