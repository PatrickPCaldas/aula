const mongoose = require('mongoose')
const professorEntity = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
        unique: true,
        
    },
    codigoMateria:{
        type: Number,
        required: false,
    },
    alunos:{
        type: Array,
        required: false,
    },

});

module.exports = professorEntity;