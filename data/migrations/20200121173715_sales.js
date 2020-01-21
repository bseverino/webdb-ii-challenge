exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl  => {
        tbl.increments()
        tbl.integer('car_id').notNullable()
        tbl.foreign('car_id').references('id').inTable('cars')
        tbl.string('buyer_name').notNullable()
        tbl.integer('sale_price').notNullable()
        tbl.timestamps()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales')
}