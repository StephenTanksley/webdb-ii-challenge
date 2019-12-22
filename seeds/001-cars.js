
exports.seed = async function(knex) {
  //this command clears out all existing data in the database.
  await knex('cars').truncate()

  //this command allows us to reset the database to its original state.
  await knex('cars').insert([
    { 
      "VIN": 12582, 
      "Make": "Honda", 
      "Model": "Element", 
      "Mileage": 128592.2,
      "Transmission": "Automatic",
      "Title Status": "Clean"
    },
    {
      "VIN": 2759274, 
      "Make": "Ford", 
      "Model": "Focus", 
      "Mileage": 25552.2,
      "Transmission": "Automatic",
      "Title Status": "Clean"
    },
    {
      "VIN": 2850276, 
      "Make": "Porsche", 
      "Model": "718 Cayman S", 
      "Mileage": 10000.1,
      "Transmission": "Standard",
      "Title Status": "Clean"
    }
  ])
};
