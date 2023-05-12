const {getAllProfessores, getProfessorByCpf, postProfessor, putProfessor, deleteProfessor, getProfessorOrdenado} = require("../services/serviceProf")

exports.getAllProfessoresController = async (req,res) =>{
    try{
        const data = await getAllProfessores(req,res)
        res.status(200).json(data)
    }catch(err){
            res.status(500).json({ erro: err.message })
        }
    }

exports.getProfessorByCpfController = async (req,res) =>{
    try{
        const data = await getProfessorByCpf(req,res)
        if(!data){
            throw new Error ('Professor não Encontrado')
        }
        res.status(200).json(data)
    }catch(err){
        if (err.message == 'Professor não encontrado') {
            res.status(404).json({ erro: err.message })
        } else {
            res.status(500).json({ erro: err.message })
        }
    }
}

exports.postProfessorController = async (req,res)=>{
    try{
        const data = await postProfessor(req,res)
        if(data) {
            res.status(200).json('Professor adicionado com sucesso')
        }else{
            res.status(500).json('Professor não adicionado pois já está cadastrado')
        }
    }catch(err){
            res.status(500).json({err: err.message})
    }
}

exports.putProfessorController = async (req,res)=>{
    try{
        const data = await putProfessor(req,res)
        if(data){
            res.status(200).json('Professor modificado com sucesso')
        }else{
            throw new Error('Professor não encontrado')
        }
    }catch(err){
        res.status(500).json({err: err.message})
    }
}

exports.deleteProfessorController = async (req,res)=>{
    try{
        const data = await deleteProfessor(req,res)
        if (data) {
            res.status(200).json(`Professor deleteado com sucesso`)
        } else {
            throw new Error('Professor não encontrado')
        }

    }catch(err){
        res.status(500).json({err: err.message})
    }
}

exports.getProfessorOrdenadoController = async (req,res)=>{
    try{
        const data = await getProfessorOrdenado(req,res)
        res.status(200).json(data)

    }catch(err){
        res.status(500).json({err: err.message})
    }
}

