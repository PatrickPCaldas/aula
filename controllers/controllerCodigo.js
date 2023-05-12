const {getAllCodigos, getCodigoByCpf, postCodigo, putCodigo, deleteCodigo, getCodigoOrdenado} = require("../services/serviceCodigo")

exports.getAllCodigosController = async (req,res) =>{
    try{
        const data = await getAllCodigos(req,res)
        res.status(200).json(data)
    }catch(err){
            res.status(500).json({ erro: err.message })
        }
    }

exports.getCodigoByCpfController = async (req,res) =>{
    try{
        const data = await getCodigoByCpf(req,res)
        if(!data){
            throw new Error ('Codigo não Encontrado')
        }
        res.status(200).json(data)
    }catch(err){
        if (err.message == 'Codigo não encontrado') {
            response.status(404).json({ erro: err.message })
        } else {
            response.status(500).json({ erro: err.message })
        }
    }
}

exports.postCodigoController = async (req,res)=>{
    try{
        const data = await postCodigo(req,res)
        if(data) {
            res.status(200).json('Codigo adicionado com sucesso')
        }else{
            res.status(500).json('Codigo não adicionado pois já está cadastrado')
        }
    }catch(err){
            res.status(500).json({err: err.message})
    }
}

exports.putCodigoController = async (req,res)=>{
    try{
        const data = await putCodigo(req,res)
        if(data){
            res.status(200).json('Codigo modificado com sucesso')
        }else{
            throw new Error('Codigo não encontrado')
        }
    }catch(err){
        res.status(500).json({err: err.message})
    }
}

exports.deleteCodigoController = async (req,res)=>{
    try{
        const data = await deleteCodigo(req,res)
        if (data) {
            res.status(200).json(`Codigo deleteado com sucesso`)
        } else {
            throw new Error('Codigo não encontrado')
        }

    }catch(err){
        res.status(500).json({err: err.message})
    }
}

exports.getCodigoOrdenadoController = async (req,res)=>{
    try{
        const data = await getCodigoOrdenado(req,res)
        res.status(200).json(data)

    }catch(err){
        res.status(500).json({err: err.message})
    }
}