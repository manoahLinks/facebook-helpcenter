let express = require('express'),
    router = express.Router(),
    controllers = require('../controllers/client')

router.route('/')
    .get(controllers.showAllClients)
    .post(controllers.createClient)

router.route('/:id')
    .get(controllers.singleClient)
    .delete(controllers.deleteClient)    


module.exports = router    
