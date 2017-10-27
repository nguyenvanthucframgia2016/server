var UserController = require('../controllers/user.js');

module.exports = function (app) {
    app.get('/api/users', UserController.findAll);
    app.post('/api/user', UserController.create);
    app.get('/api/user/:user_id', UserController.findOne);
    app.put('/api/user/:user_id', UserController.update);
    app.delete('/api/user/:user_id', UserController.delete);
}