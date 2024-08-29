var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const clientes = require('../models').cliente;

router.get('/findAll/json', function(req, res, next) {

    clientes.findAll({
         attributes: { exclude:["updatedAt"] }
    })
    .then(clientes => {
         res.json(clientes);
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;