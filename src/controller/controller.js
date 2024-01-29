const fs = require('fs')
const path = require('path')

async function readJSON(filename){
    try{
        const dataBuffer = fs.readFileSync(path.join(__dirname, `../json/${filename}`))
        const dataText = dataBuffer.toString('utf-8')
        return JSON.parse(dataText);
    }
    catch(err){
        throw err
    }
}

exports.team = async function(req, res){
    try{
        const data = await readJSON('team.json')
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send({message : err.message})
    }
}
exports.events = async function(req, res){
    try{
        const data = await readJSON('events.json')
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send({message : err.message})
    }
}
exports.gallery = async function(req, res){
    try{
        const data = await readJSON('gallery.json')
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send({message : err.message})
    }
}