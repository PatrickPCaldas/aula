const {searchAll, createMusic} = require("../services/serviceItunes")

exports.searchAllController = async (req,res) =>{
    try{
        const data = await searchAll(req)
        res.status(200).json(data)
    }catch(err){
        res.status(400)
        res.json({msg: err})
    }

    // exports.createController = async (req,res)=>{
    //     try{
    //         const data = await createMusic(req)
    //         res.status(200).json({msg: "Música criada"})
    //     }catch(err){
    //         res.status(400)
    //     res.json({msg: err})
    //     }

    // }
}
