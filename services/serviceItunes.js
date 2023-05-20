const axios = require("axios")

searchAll = async (req) => {
    const term = req.query["term"];
    return axios.get(`https://itunes.apple.com/search?term=${term}`).then((response)=>{
    //console.log(response.data)
    return response.data
}).catch((err)=>{console.log(err)})
}

// createMusic = async (req) =>{
//     return axios.post('https://itunes.apple.com/create',req.body).then((response)=>{
//     return response.data
//     }).catch((err)=>{console.log(err)})
// }
// 

module.exports = {searchAll};