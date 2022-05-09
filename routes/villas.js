const express = require('express');
const router=express.Router();
const villasModule=require('../Module/villasModule');

router.post('/savevillas',villasModule.postvillas);
router.get('/getvillas',villasModule.getvillas);
router.patch('/updateresort/:resortId',villasModule.updatevillas);
router.delete('/deleteresort:resortId',villasModule.deletevillas);

module.exports = router;
