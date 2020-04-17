'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')


class Location extends Model {

  user() {
    return this.belongsTo('App/Models/User')
  }

  static async scopeNearBy(query,data) {
    const haversine = `(6371 * acos(cos(radians(${data.latitude}))
          * cos(radians(latitude))
          * cos(radians(longitude)
          - radians(${data.longitude}))
          + sin(radians(${data.latitude}))
          * sin(radians(latitude))))`

    return await query
      .select('*', Database.raw(`${haversine} as distance`))
      .orderBy(`distance`).fetch()
  }

  rating() {
    return this.hasMany('App/Models/Rating')
  }
}

module.exports = Location
