const express = require('express');
const {getAllAlunosController,getAlunoByCpfController, postAlunoController, putAlunoController, deleteAlunoController, getAlunoOrdenadoController } = require('../controllers/controllerAluno');
const {getAllProfessoresController,getProfessorByCpfController, postProfessorController, putProfessorController, deleteProfessorController, getProfessorOrdenadoController } = require('../controllers/controllerProf');
const {getAllCodigosController,getCodigoByCpfController, postCodigoController, putCodigoController, deleteCodigoController, getCodigoOrdenadoController } = require('../controllers/controllerCodigo');
const{searchAllController} = require('../controllers/controllerItunes')
const router = express.Router();

router.route('/alunos').get(getAllAlunosController)
router.route('/aluno').get(getAlunoByCpfController).post(postAlunoController).put(putAlunoController)
router.route('/aluno').delete(deleteAlunoController)
router.route('/alunosordenado').get(getAlunoOrdenadoController)

router.route('/professores').get(getAllProfessoresController)
router.route('/professor').get(getProfessorByCpfController)
router.route('/professor').post(postProfessorController)
router.route('/professor').put(putProfessorController)
router.route('/professor').delete(deleteProfessorController)
router.route('/professoresordenado').get(getProfessorOrdenadoController)

router.route('/codigos').get(getAllCodigosController)
router.route('/codigo').get(getCodigoByCpfController)
router.route('/codigo').post(postCodigoController)
router.route('/codigo').put(putCodigoController)
router.route('/codigo').delete(deleteCodigoController)
router.route('/codigoordenado').get(getCodigoOrdenadoController)

router.route('/itunes/search').get(searchAllController)







module.exports =router;