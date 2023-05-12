const mongoose = require('mongoose');
const professorEntity = require('../entities/professor.entity');
const Professor = mongoose.model('Professor', professorEntity);

module.exports = Professor;