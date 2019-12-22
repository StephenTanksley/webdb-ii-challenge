exports.up = async function(knex) {
  await knex.schema.createTable('cars', (table) => {
      table.increments('car_id');
      table.float('VIN').notNull().unique()
      table.text('Make', 128).notNull()
      table.text('Model', 128).notNull()
      table.decimal('Mileage').notNull()
      table.text('Transmission')
      table.text('Title Status')
  })
};
 
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars')
};
