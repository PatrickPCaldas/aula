const express = require('express');
const app = express();
const router = require('./routes/route')


const mongoose = require('mongoose')

const {mediaDoAlunoMaterias,mediadoAluno} = require('./services/serviceAluno')
const {mediaProf} = require('./services/serviceProf')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('',router);

const MONGO_URI = 'mongodb+srv://PatrickCaldas:135135@cluster0.a9oytih.mongodb.net/fixacao'
mongoose.connect(
    MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conectado ao Banco de Dados")
    }).catch((err) => {
        console.log(err)
    })



//mediaDoAlunoMaterias("001")
//mediaProf("123")






app.listen(8080, (req, res) => {
    console.log("Servidor rodando")
});