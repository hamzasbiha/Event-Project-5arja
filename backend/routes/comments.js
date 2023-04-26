const express = require('express');
const router = express.Router();


const { getAllcomments, addcomments, getOnecomments ,deleteOnecomments} = require('../controler/comments');



router.get('/getAllcomments', getAllcomments);
router.get('/:idcomments', getOnecomments);
router.post('/addcomments', addcomments);
router.delete('/:idcomments', deleteOnecomments)

module.exports = router;