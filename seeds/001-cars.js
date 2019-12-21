
exports.seed = async function(knex) {
  await knex('cars').truncate()

  await knex('cars').insert([
    { 
      VIN: 12582, 
      Make: "Honda", 
      Model: "Element", 
      Mileage: 128592.2,
      Transmission: "Automatic",
      Title: "Clean"
    },
    {
      VIN: 2759274, 
      Make: "Ford", 
      Model: "Focus", 
      Mileage: 25552.2,
      Transmission: "Automatic",
      Title: "Clean"
    },
    {
      VIN: 2850276, 
      Make: "Porsche", 
      Model: "718 Cayman S", 
      Mileage: 10000.1,
      Transmission: "Standard",
      Title: "Clean"
    }
  ])
};
