'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')


class UserService {
    static async find(data) {
        const user = await User.findBy('email', data)
        console.log(user)
        return user
    }

    static async checkPassword(data,user){
       return await Hash.verify(data.oldPassword,user.password)   
    }

    static async updateEmail(data, user) {
        user.merge(data)
        await user.save(data)
        return user
    }

    static async updatePassword(data, user) {
        user.password = await Hash.make(data.password)
        await user.save()
        return user
    }

    static async create(data) {
        const user = await User.create(data)
        return user
    }

}

module.exports = UserService
