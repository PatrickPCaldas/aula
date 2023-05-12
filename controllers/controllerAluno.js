const {getAllAlunos, getAlunoByCpf, postAluno, putAluno, deleteAluno, getAlunoOrdenado} = require("../services/serviceAluno")

exports.getAllAlunosController = async (req,res) =>{
    try{
        const data = await getAllAlunos(req,res)
        res.status(200).json(data)
    }catch(err){
            res.status(500).json({ erro: err.message })
        }
    }

exports.getAlunoByCpfController = async (req,res) =>{
    try{
        const data = await getAlunoByCpf(req,res)
        if(!data){
            throw new Error ('Aluno não Encontrado')
        }
        res.status(200).json(data)
    }catch(err){
        if (err.message == 'Aluno não encontrado') {
            response.status(404).json({ erro: err.message })
        } else {
            response.status(500).json({ erro: err.message })
        }
    }
}

exports.postAlunoController = async (req,res)=>{
    try{
        const data = await postAluno(req,res)
        if(data) {
            res.status(200).json('Aluno adicionado com sucesso')
        }else{
            res.status(500).json('Aluno não adicionado pois já está cadastrado')
        }
    }catch(err){
            res.status(500).json({err: err.message})
    }
}

exports.putAlunoController = async (req,res)=>{
    try{
        const data = await putAluno(req,res)
        if(data){
            res.status(200).json('Aluno modificado com sucesso')
        }else{
            throw new Error('Aluno não encontrado')
        }
    }catch(err){
        res.status(500).json({err: err.message})
    }
}

exports.deleteAlunoController = async (req,res)=>{
    try{
        const data = await deleteAluno(req,res)
        if (data) {
            res.status(200).json(`Aluno deleteado com sucesso`)
        } else {
            throw new Error('Aluno não encontrado')
        }

    }catch(err){
        res.status(500).json({err: err.message})
    }
}

exports.getAlunoOrdenadoController = async (req,res)=>{
    try{
        const data = await getAlunoOrdenado(req,res)
        res.status(200).json(data)

    }catch(err){
        res.status(500).json({err: err.message})
    }
}

