const express = require('express');
const router=express.Router();
const hotelModule=require('../Module/hotelModule');

router.post('/savehotel',hotelModule.posthotel);
router.get('/gethotel',hotelModule.gethotel);
router.patch('/updatehotel/:chickenId',hotelModule.updatehotel);
router.delete('/deletehotel:chickenId',hotelModule.deletehotel);

module.exports = router;
