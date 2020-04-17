'use strict'

const Rating = use('App/Models/Rating')

class RatingService {
    static async store(data) {
        console.log(data)
        return await Rating.create(data)
    }

}

module.exports = RatingService
