var User = require('../models/user.js');

exports.create = function (req, res) {
    try {
        var user = new User({
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            gender: req.body.gender,
            address: req.body.address,
            birthdate: req.body.birthdate,
        });

        user.save().then(function (data) {
            res.send(data);
        }).catch(function (error) {
            res.status(500).send({
                message: "Some error occurred while creating the user."
            });
        });
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
};

exports.update = function (req, res) {
    try {
        var userId = req.params.user_id;
        var userEdit = User.findById(userId);
        var userUpdate = userEdit.then(function (user) {
            user.firstName = req.body.first_name;
            user.lastName = req.body.last_name;
            user.gender = req.body.gender;
            user.address = req.body.address;
            user.birthdate = req.body.birthdate;

            return user.save();
        });

        userUpdate.then(function (data) {
            res.send(data);
        });

        userUpdate.catch(function (error) {
            res.status(500).send({
                message: "Could not update user with id " + userId
            });
        });

        userEdit.catch(function (error) {
            res.status(500).send({
                message: "Could not find a user with id " + userId
            });
        });
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
};

exports.delete = function (req, res) {
    try {
        var userId = req.params.user_id;

        User.remove({
            _id: userId
        }).then(function (data) {
            res.send({
                message: "User deleted successfully!"
            })
        }).catch(function (error) {
            res.status(500).send({
                message: "Could not delete user with id " + userId
            });
        });
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
};

exports.findOne = function (req, res) {
    try {
        var userId = req.params.user_id;

        User.findById(userId).then(function (user) {
            res.send(user);
        }).catch(function (error) {
            res.status(500).send({
                message: "Could not retrieve user with id " + userId
            });
        });
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
};

exports.findAll = function (req, res) {
    try {
        User.find().then(function (users) {
            res.send(users);
        }).catch(function (error) {
            res.status(500).send({
                message: "Some error occurred while retrieving users."
            });
        });
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
};