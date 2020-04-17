'use strict'

const RatingService = use('App/Services/RatingService')

class RatingController {
  async store ({ request, auth }) {
    console.log(auth)
    return RatingService.store({...request.all(), user_id:auth.user.id})
  }

  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = RatingController
