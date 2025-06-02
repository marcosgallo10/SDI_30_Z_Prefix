/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users' , table => {
    table.increments('id');
    table.string('first_name', 250)
    table.string('last_name', 250)
    table.string('user_name', 250)
    table.string('password', 250)
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');

};
