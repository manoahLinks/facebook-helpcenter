require('dotenv').config()
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      clientRoutes = require('./routes/client')
      
app.use(express.static('build'))      
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/clients', clientRoutes )

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

