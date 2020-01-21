exports.seed = function(knex) {
    return knex('sales')
        .truncate()
        .then(function() {
            return knex('sales').insert([
                {
                    "id": 1,
                    "car_id": 2,
                    "buyer_name": "John Smith",
                    "sale_price": 6000,
                    "created_at": new(Date),
                    "updated_at": new(Date)
                }
            ])
        })
};