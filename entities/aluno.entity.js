const mongoose = require('mongoose')
const alunoEntity = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
        unique: true,
        
    },
    materias:{
        type: Object,
        required: true,  
      },
});


module.exports = alunoEntity;