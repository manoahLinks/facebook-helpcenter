const Clients = require('../models/client'),
    nodemailer = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport')


// create new compliant
exports.createClient = async (req, res) =>{
    const {email, username, compliant, contact} = req.body
    
    try{
        const client = await Clients.create({email, username, compliant, contact})
        res.status(200).json(client)

        let transport = nodemailer.createTransport(smtpTransport({
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        }))

        const info = await transport.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: client.email,
            subject: 'FacebookSupport',
            text: 'this is a test email for verification'
        }, (err, sent)=>{
            if(err){
                console.log('error send email')     
            }else{
                console.log('succesfully sent', sent)
            }
        })

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