const express = require('express');
const router = express.Router();


const { getAllEventplaner, addEventplaner, getOneEventplaner , deleteOneEventplaner} = require('../controler/eventplaner');



router.get('/getAlleventplaner', getAllEventplaner);
router.get('/:ideventplaner', getOneEventplaner);
router.post('/addeventplaner', addEventplaner);
router.delete('/:ideventplanner', deleteOneEventplaner)

module.exports = router;