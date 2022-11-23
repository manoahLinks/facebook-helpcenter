require('dotenv').config()
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      clientRoutes = require('./routes/client')
      
      
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.use('/clients', clientRoutes )



// connecting to mongoose and connecting to backend server
mongoose.connect(process.env.LOCAL_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("recieving signals from server")
        })
    })
    .catch((err)=>{
        console.log(err)
    })

