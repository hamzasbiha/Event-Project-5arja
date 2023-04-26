const express = require('express');
const router = express.Router();


const { getAllpost, addpost, getOnepost ,deleteOnepost} = require('../controler/post');


router.get('/getAllpost', getAllpost);
router.get('/:idpost', getOnepost);
router.post('/addpost', addpost);
router.delete('/:idpost', deleteOnepost)

module.exports = router;