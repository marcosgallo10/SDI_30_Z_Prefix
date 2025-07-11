/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items' , table => {
    table.increments('id');
    table.integer('user_id')
    table.string('item_name', 250)
    table.string('description', 250)
    table.integer('quantity')
  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items');
};
