'use strict'

const UserService = use('App/Services/UserService')

class SessionController {
  async create({ request, auth, response }) {
    const { email, password } = request.all();
    const user = await UserService.find(email);
    if (!user){
      return response.status(400).json({error:true, message:"Email not exists"})
    }

    let token = await auth.withRefreshToken().attempt(email, password)
    return response.status(200).json({ data: token, message: 'Login successfull', status: true })
  }

  async logout({ response, auth }) {
    const user = await auth.getUser()
    await auth.revokeTokensForUser(user, [], true)
    return response.send({ message: 'Logout successfully' })
  }

  async refresh({ request, auth }) {
    const refreshToken = request.input('refresh_token')
    await auth.generateForRefreshToken(refreshToken)
    return response.send({ message: 'Refreshed successfully' })
  }
}

module.exports = SessionController