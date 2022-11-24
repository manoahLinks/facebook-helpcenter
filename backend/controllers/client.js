const Clients = require('../models/client')


// create new compliant
exports.createClient = async (req, res) =>{
    const {email, username, compliant, contact} = req.body
    
    try{
        const client = await Clients.create({email, username, compliant, contact})
        res.status(200).json(client)

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// get all clients and compliants
exports.showAllClients = async (req, res) => {
    try{
        const clients = await Clients.find({})
        res.status(200).json(clients)
    }catch(error){
        res.status(400).json({error: error.message, message: 'could not find all compliants'})
    }
}

// get single clientcompliants
exports.singleClient = async (req, res) =>{

    try{
        const client = await Clients.findById(req.params.id)
        res.status(200).json(client)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


exports.sendMail = async (req, res) => {

    const {mailBody} = req.body
    
    try{

    }catch(error){
        
    }
}

module.exports = exports