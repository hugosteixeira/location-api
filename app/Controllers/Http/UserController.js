const UserService = use('App/Services/UserService');

class UserController {
  async store({ request, response }) {
    const data = request.only(['username', 'email', 'password']);
    if ( await UserService.find(data.email)) {
      return response.status(409).json({ error: true, message: "Email already exists" })
    }
    const user = await UserService.create(data);
    return user;
  }

  async update({ request, auth, params, response }) {
    const data = request.all()
    if (data.oldPassword) {
      if (await UserService.checkPassword(data, auth.user)) {
        return await UserService.updatePassword(data, auth.user)
      } else {
        return response.status(400).json({ error: true, message: "Passwords does not match" })
      }
    }

    if (await UserService.find(data.email)) {
      return response.status(409).json({ error: true, message: "Email already exists" })
    }
    return await UserService.updateEmail(data, auth.user)

  }
}

module.exports = UserController;
