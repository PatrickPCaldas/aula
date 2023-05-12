const mongoose = require('mongoose');
const codigoEntity = require('../entities/codigo.entity');
const Codigo = mongoose.model('Codigo', codigoEntity);



module.exports = Codigo;