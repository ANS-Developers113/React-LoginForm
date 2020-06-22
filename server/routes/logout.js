const express = require('express');
const router = express.Router();

const tokenVerify = require('../requiretoken');

const logout = require('../Controller/login');

router.post('/', tokenVerify.verifyTheToken, logout.logoutUser);

module.exports=router;