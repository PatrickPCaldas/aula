const Codigo = require('../model/codigo.model')

exports.getAllCodigos = async (req, res) => {

        return await Codigo.find()
}

exports.getCodigoByCpf = async (req, res) => {
    let cpfProf = req.query["cpf"]
  
        const dbCodigo = await Codigo.findOne({cpfProf: cpfProf})
        if(dbCodigo !== undefined || dbCodigo !== null){
            //arumar esse null
            return {message: dbCodigo}
        }
        return {message:"Codigo não encontrado"}
        
}

exports.postCodigo = async (req, res) => {

        const dbListCodigo = await Codigo.find()
        if (dbListCodigo.every(el => el.codigoMateria !== req.body.codigoMateria)) {

            const codigo = new Codigo({
                codigoMateria: req.body.codigoMateria,
                nome: req.body.nome,
                cpfProf: req.body.cpfProf
            })
            return await Codigo.create(codigo);
        }
        return undefined

}

exports.putCodigo = async (req,res)=>{
    const codigo = {
        codigoMateria: req.body.codigoMateria,
        nome: req.body.nome,
        cpfProf: req.body.cpfProf
    }
        const codigoEncontrado = await Codigo.findOne({codigoMateria: codigo.codigoMateria})
        if(codigoEncontrado.length<1){
            return undefined
        }
        return await Codigo.findByIdAndUpdate(codigoEncontrado._id, codigo)

}

exports.deleteCodigo = async (req,res)=>{
    const codigoMateria = Number(req.query["codigo"])

        const codigoEncontrado = await Codigo.find({codigoMateria:codigoMateria})
        if(codigoEncontrado.length<1){
            return undefined
        }
        return await Codigo.findByIdAndDelete(codigoEncontrado[0]._id)
}

exports.getCodigoOrdenado = async (req,res)=>{

        const dbListCodigo = await Codigo.find()

        let baseordenada = dbListCodigo.sort((a, b) => {
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