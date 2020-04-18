'use strict'

const RatingService = use('App/Services/RatingService')

class RatingController {
  async store ({ request, auth }) {
    return RatingService.store({...request.all(), user_id:auth.user.id})
  }
}

module.exports = RatingController
