'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatingSchema extends Schema {
  up () {
    this.create('ratings', (table) => {
      table.increments()
      table.integer('rating').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('location_id').unsigned().references('id').inTable('locations')
      table.string('message')
      table.timestamps()
    })
  }

  down () {
    this.drop('ratings')
  }
}

module.exports = RatingSchema
