const express = require('express');
const router = express.Router();


const { getAllclient, addclient, getOneclient , deleteOneclient} = require('../controler/client');



router.get('/getAllclient', getAllclient);
router.get('/:idclient', getOneclient);
router.post('/addclient', addclient);
router.delete('/:idclient', deleteOneclient)

module.exports = router;