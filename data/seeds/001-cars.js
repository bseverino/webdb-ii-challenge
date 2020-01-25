exports.seed = function(knex) {
    return knex('cars')
        .truncate()
        .then(function() {
            return knex('cars').insert([
                {
                    "id": 1,
                    "vin": 39485927485938540,
                    "make": "Jeep",
                    "model": "Liberty",
                    "mileage": 160000,
                    "transmission": "manual",
                    "titleStatus": "salvage"
                    },
                {
                    "id": 2,
                    "vin": 95748390265093821,
                    "make": "Honda",
                    "model": "Civic",
                    "mileage": 80000,
                    "transmission": "automatic",
                    "titleStatus": "clean"
                }
            ])
        })
};