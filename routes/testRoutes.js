const express=require('express');
const { testController } = require('../controllers/testController');

// router obj
const router=express.Router();

// router
router.get('/',testController);

module.exports=router;