const Professor = require('../model/professor.model')
const Aluno = require('../model/aluno.model')
const Codigo = require('../model/codigo.model')

getAllProfessores = async (req, res) => {

    return await Professor.find()
}

getProfessorByCpf = async (req, res) => {
    let cpfProfessor = req.query["cpf"]

    const dbProfessor = await Professor.findOne({ cpf: cpfProfessor })
    if (dbProfessor !== undefined || dbProfessor !== null) {
        //arrumar esse null
        return { message: dbProfessor }
    }
    return { message: "Professor não encontrado" }
}


postProfessor = async (req, res) => {

    const dbListProfessor = await Professor.find()
    if (dbListProfessor.every(pr => pr.cpf !== req.body.cpf)) {

        const professor = new Professor({
            nome: req.body.nome,
            cpf: req.body.cpf,
            materia: req.body.materia,
            alunos: req.body.alunos
        })
        return await Professor.create(professor);
    }
    return undefined

}

putProfessor = async (req, res) => {
    const professor = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        materia: req.body.materia,
        alunos: req.body.alunos
    }
    const professorEncontrado = await Professor.findOne({ cpf: professor.cpf })
    if (professorEncontrado.length < 1) {
        return undefined
    }
    return Professor.findByIdAndUpdate(professorEncontrado._id, professor)

}

deleteProfessor = async (req, res) => {
    const cpfProfessor = req.query["cpf"]

    const professorEncontrado = await Professor.find({ cpf: cpfProfessor })
    if (professorEncontrado.length < 1) {
        return undefined
    }
    return Professor.findByIdAndDelete(professorEncontrado[0]._id)
}


getProfessorOrdenado = async (req, res) => {

    const dbListProfessor = await Professor.find()

    let baseordenada = dbListProfessor.sort((a, b) => {
        let na = a.nome.toLowerCase()
        let nb = b.nome.toLowerCase()
        if (na < nb) {
            return -1
        }
        if (na > nb) {
            return 1
        }
        return 0
    })
    return baseordenada

}

async function mediaProf(cpfProf){

    var professorEncontrado = await Professor.findOne({cpf: cpfProf})
    var codigo = await Codigo.findOne({cpfProf: cpfProf})
    var materia = codigo.codigoMateria
    var listaAlunos = professorEncontrado.alunos
    var todosAlunos =  await Aluno.find()
    var alunosFiltrados = todosAlunos.filter(el=> listaAlunos.includes(el.cpf))
    //console.log(alunosFiltrados)
    var obj = alunosFiltrados.map(el =>{
        var materiaEscolhida = el.materias.find(mat => mat.codigo == materia)     
        return (
        {
           nome: el.nome,
           cpf: el.cpf,
           media: (materiaEscolhida.N1+materiaEscolhida.N2+materiaEscolhida.N3)/3
        }
    )})
    //console.log(obj)
        var media=0
        obj.forEach(aluno=>{
            media+=aluno.media
        })
        media=media/obj.length
        //console.log(obj.length)
        console.log(media)
}

module.exports = {mediaProf,getAllProfessores, getProfessorByCpf, postProfessor, putProfessor, deleteProfessor, getProfessorOrdenado}





// // Essa funcao lista os alunos de um determinado professor.

// async function NotasdoProfessor(cpfProfessor){
//     var professorEncontrado = await Professor.findOne({cpf: cpfProfessor})
//     var listaAlunos = professorEncontrado.alunos
//     var materia = professorEncontrado.materia

//     var arrayListagem =[]
//     var i = listaAlunos.length
//     for(let j = 0; j < i; j++){
//         var item = {cpfAluno: listaAlunos[j], materia: materia}
//         arrayListagem.push(item)
//     }
//     //console.log(arrayListagem)

//     var arrayMedias = arrayListagem.map(el=> criaObjMateria(el))
//     return arrayMedias
//     //console.log(arrayListagem)
// }


// // var teste = NotasdoProfessor("11112")
// // console.log(teste)


// //Cria Obj de ALunos para inserir na Media

// async function criaObjMateria({cpfAluno, materia}){
//     var alunoEncontrado = await Aluno.findOne({cpf: cpfAluno})
//     var materiaEncontrada = materia
//     //console.log(alunoEncontrado)
//      var materiasObj = alunoEncontrado.materias
//      //console.log(materiasObj)
//      var index = materiasObj.findIndex( el => el.nome == materiaEncontrada)
//      //console.log(index)
//      var resultado = materiasObj[index]
//     console.log(resultado)
//      return resultado
// }

// // criaObjMateria({cpfAluno: "001",materia:"Espanhol"})
// // NotasdoProfessor("11112")


// // criaObjMateria("002","Espanhol")
