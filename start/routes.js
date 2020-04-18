'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.store').prefix('api/v1')

Route.post('/sessions', 'SessionController.create').prefix('api/v1')


Route.group(() => {
  Route.get("users", "UserController.show")
  Route.put("users", "UserController.update")

  Route.resource('locations', 'LocationController')

  Route.post("rating", "RatingController.store")

  Route.get('/sessions', 'SessionController.logout')
  Route.get('/sessions/:token', 'SessionController.refresh')
}).middleware('auth').prefix('api/v1')
