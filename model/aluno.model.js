const mongoose = require('mongoose');
const alunoEntity = require('../entities/aluno.entity');
const Aluno = mongoose.model('Aluno', alunoEntity);



module.exports = Aluno;