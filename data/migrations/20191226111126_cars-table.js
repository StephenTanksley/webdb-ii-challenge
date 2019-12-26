exports.up = async function(knex) {
    await knex.schema.dropTableIfExists('cars')
    await knex.schema.createTable('cars', (table) => {
        table.increments('id');
        table.float('vin').notNull().unique()
        table.text('make', 128).notNull()
        table.text('model', 128).notNull()
        table.decimal('mileage').notNull()
        table.text('transmission')
        table.text('title')
    })
  };
   
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('cars')
  };