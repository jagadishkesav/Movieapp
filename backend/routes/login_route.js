const express = require('express');
const router = express.Router();
const adminLogin = require('../controllers/login_controller');

router.post('/', adminLogin.login_post)

module.exports = router;
