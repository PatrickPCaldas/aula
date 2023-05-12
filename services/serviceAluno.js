const Aluno = require('../model/aluno.model')

getAllAlunos = async (req, res) => {

        return await Aluno.find()
}

getAlunoByCpf = async (req, res) => {
    let cpfaluno = req.query["cpf"]
  
        const dbAluno = await Aluno.findOne({cpf: cpfaluno})
        if(dbAluno !== undefined || dbAluno !== null){
            //arumar esse null
            return {message: dbAluno}
        }
        return {message:"Aluno não encontrado"}
        
}

postAluno = async (req, res) => {

        const dbListAluno = await Aluno.find()
        if (dbListAluno.every(al => al.cpf !== req.body.cpf)) {

            const aluno = new Aluno({
                nome: req.body.nome,
                cpf: req.body.cpf,
                materias: req.body.materias
            })
            return await Aluno.create(aluno);
        }
        return undefined

}

putAluno = async (req,res)=>{
    const aluno = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        materias: req.body.materias
    }
        const alunoEncontrado = await Aluno.findOne({cpf:aluno.cpf})
        if(alunoEncontrado.length<1){
            return undefined
        }
        return await Aluno.findByIdAndUpdate(alunoEncontrado._id, aluno)

}

deleteAluno = async (req,res)=>{
    const cpfAluno = req.query["cpf"]

        const alunoEncontrado = await Aluno.find({cpf: cpfAluno})
        if(alunoEncontrado.length<1){
            return undefined
        }
        return await Aluno.findByIdAndDelete(alunoEncontrado[0]._id)
}

getAlunoOrdenado = async (req,res)=>{

        const dbListAluno = await Aluno.find()

        let baseordenada = dbListAluno.sort((a, b) => {
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

//teste("11112")

//MÉDIA DO ALUNO DE CADA MATÉRIA

// Essa função recebe um aluno do dB e utiliza a funcao MediadoAluno
//em todas as matérias
async function mediaDoAlunoMaterias(cpfAluno){
    var alunoEncontrado = await Aluno.findOne({cpf: cpfAluno})
    console.log(`As médias do aluno ${alunoEncontrado.nome} de CPF ${alunoEncontrado.cpf} são:`)
    alunoEncontrado.materias.forEach(mediadoAluno)
}

// Essa função lista as médias dos alunos de uma matéria registrada
//sendo a entrada o objeto do tipo {matéria: N1: N2: N3:}
function mediadoAluno(obj){
    var media = (obj.N1 + obj.N2 + obj.N3)/3
    console.log(`A média da matéria ${obj.codigo} é ${media}.`)
    return media

     // Ajustar para Null
}

module.exports = {mediaDoAlunoMaterias,mediadoAluno,getAllAlunos, getAlunoByCpf, postAluno, putAluno, deleteAluno, getAlunoOrdenado}





