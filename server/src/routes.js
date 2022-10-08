const UserController = require('./controllers/UserController.js');
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    app.post('/user',UserController.create)
    app.put('/user/:userId',UserController.put)
    app.delete('/user/:userId',UserController.remove)
    app.get('/user/:userId',UserController.show)
    app.get('/users', isAuthenController, UserController.index )
    app.post('/login',UserAuthenController.login)
}