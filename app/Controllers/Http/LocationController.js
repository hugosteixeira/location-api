'use strict'

const LocationService = use('App/Services/LocationService')

class LocationController {
  
  async index({request }) {
    const orderBy = request.only('orderBy').orderBy
    return await LocationService[`${orderBy}Order`](request.all())
  }

  async store({ request, response, auth }) {
    const data = request.only(["name", "address", "latitude", "longitude"])
    data.user_id = auth.user.id
    if (await LocationService.checkExists(data.address)){
      return response.status(409).json({error:true, message:"Location Already Exists"})
    }
    return LocationService.store(data)
  }

  async show({ params }) {
    const location = await LocationService.find(params.id);
    return location;
  }

  async update({ params, request, response, auth }) {
    const data = request.only(["name", "address", "latitude", "longitude"])
    data.user_id = auth.user.id
    data.id = params.id
    if (await LocationService.checkExists(data.address)){
      return response.status(409).json({error:true, message:"Location Already Exists"})
    }
    return LocationService.update(data)
  }

  async destroy({ params, request, response }) {
  }

}

module.exports = LocationController
