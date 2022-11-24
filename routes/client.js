let express = require('express'),
    router = express.Router(),
    controllers = require('../controllers/client')

router.route('/')
    .get(controllers.showAllClients)
    .post(controllers.createClient)

router.route('/:id')
    .get(controllers.singleClient)    


module.exports = router    
