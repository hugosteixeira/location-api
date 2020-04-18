'use strict'

const Rating = use('App/Models/Rating')

class RatingService {
    static async store(data) {
        return await Rating.create(data)
    }

}

module.exports = RatingService
