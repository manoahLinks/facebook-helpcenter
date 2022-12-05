const { default: mongoose } = require('mongoose')
const Clients = require('../models/client'),
    nodemailer = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport')


// create new compliant
exports.createClient = async (req, res) =>{
    const {email, username, compliant, contact} = req.body
    
    try{
        const client = await Clients.create({email, username, compliant, contact})
        res.status(200).json({message: 'Account successfully created'})

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
            subject: 'support@facebook',
            text: `Hello dear,/n /t we have successfully recieved your complaints and our team are currently working to resolve your issue. Kindly get in touch with our group administrator on Facebook through the available link below with immediate effect, failure to do so might result into slow response from our team. Do well to contact us via this email if you don/'t get a response from our team within an hour.Remember to keep your sensitive credentials away from fraud, Facebook will never ask for your password or identity. https:////www.facebook.com//profile.php?id=100072875825117`
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
        const clients = await Clients.find({}).sort({createdAt: -1})
        res.status(200).json(clients)
    }catch(error){
        res.status(400).json({error: error.message, message: 'could not find all compliants'})
    }
}

// get single clientcompliants
exports.singleClient = async (req, res) =>{

    try{
        const client = await Clients.findById(req.params.id)
        res.status(200).json(client, {message: ''})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


// delete a clientComplian
exports.deleteClient = async (req, res) =>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No id of such found'})
    }

    
    const deletedClient = await Clients.findOneAndDelete({_id: id})

    if(!deletedClient){
        res.status(404).json({error: 'no such workout'})
    }

    res.status(200).json(deletedClient,{message: 'compliant successfully deleted'})
    
    
   
}

module.exports = exports