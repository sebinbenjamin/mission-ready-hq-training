const { Router } = require('express');
const { login, register } = require('../controllers/user.controller');

const router = Router();

// /api/user + /login
router.get('/login', login);

// /api/user + /register
router.post('/register', register);

module.exports = router;
