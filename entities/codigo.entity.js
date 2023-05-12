const mongoose = require('mongoose')
const codigoEntity = new mongoose.Schema({
    codigoMateria:{
        type: Number,
        required: true,
    },
    nome:{
        type: String,
        required: true,
        
    },
    cpfProf:{
        type: String,
        required: true,  
      },
});


module.exports = codigoEntity;