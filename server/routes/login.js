const express = require('express');
const router = express.Router();

const tokenVerify = require('../Controller/login');

router.post('/', tokenVerify.checkuser);

module.exports=router;