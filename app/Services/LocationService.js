'use strict'

const Location = use('App/Models/Location')

class LocationService {
    static async mapOrder(data) {
        return await Location.query().nearBy(data).fetch()
    }

    static async listOrder() {
        return Location.query().orderBy('address').fetch()
    }

    static async store(data) {
        return await Location.create(data)
    }

    static async checkExists(address){
        const locationExists = await Location.findBy("address", address);
        return locationExists
    }

    static async find(id) {
        const location = await Location.findOrFail(id);
        await location.load("rating");
        return location;
    }

    static async update(data) {
        const location = await Location.findOrFail(data.id)
        console.log(location)
        location.merge(data)
        await location.save(data)
        return location
    }

}

module.exports = LocationService
