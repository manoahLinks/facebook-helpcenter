require('dotenv').config()
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      clientRoutes = require('./routes/client'),
      cors          = require('cors'),
      path          = require('path')
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())


app.use('/api/clients', clientRoutes )



app.get(/^\/(?!api).*/, function(_, res) {
    res.sendFile(
        path.join(__dirname, "client", "build", "index.html"),
        function (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    )
})

// connecting to mongoose and connecting to backend server
mongoose.connect(process.env.LOCAL_URI, { useNewUrlParser: true})
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("currently recieving signals from server")
        })
    })
    .catch((err)=>{
        console.log(err)
    })

