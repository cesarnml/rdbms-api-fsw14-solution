exports.up = function (knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increments()
    table.string('name').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts')
}
