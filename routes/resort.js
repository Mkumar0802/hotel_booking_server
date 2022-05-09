const express = require('express');
const router=express.Router();
const resortModule=require('../Module/resortModule');

router.post('/saveresort',resortModule.postresort);
router.get('/getresort',resortModule.getresort);
router.patch('/updateresort/:resortId',resortModule.updateresort);
router.delete('/deleteresort:resortId',resortModule.deleteresort);
module.exports = router;
