
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('Make', 128)
  })
};

exports.down = function(knex) {
  
};
