
exports.seed = async function(knex) {
  //this command clears out all existing data in the database.
  await knex('cars').truncate()

  //this command allows us to reset the database to its original state.
  await knex('cars').insert([
    { 
      vin: 12582, 
      make: "Honda", 
      model: "Element", 
      mileage: 128592.2,
      transmission: "Automatic",
      title: "Clean"
    },
    {
      vin: 2759274, 
      make: "Ford", 
      model: "Focus", 
      mileage: 25552.2,
      transmission: "Automatic",
      title: "Clean"
    },
    {
      vin: 2850276, 
      make: "Porsche", 
      model: "718 Cayman S", 
      mileage: 10000.1,
      transmission: "Standard",
      title: "Clean"
    }
  ])
};
