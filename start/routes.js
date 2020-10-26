'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.get('/', 'WelcomeController.index')
Route.get('/test', 'WelcomeController.test')

Route.get('/post/:id', 'PostController.index').formats(['json', 'html'], true)

Route.get('/form', 'PostController.formPage')
Route.post('/form/save', 'PostController.formPageSave').as('form.save')