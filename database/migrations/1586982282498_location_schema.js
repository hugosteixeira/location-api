'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocationSchema extends Schema {
  up() {
    this.create('locations', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('address').notNullable().unique()
      table.float('latitude').notNullable()
      table.float('longitude').notNullable()
      table.timestamps()

    })
  }

  down() {
    this.drop('locations')
  }
}

module.exports = LocationSchema
