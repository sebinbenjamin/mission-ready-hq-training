const { Router } = require('express');
const { get, update } = require('../controllers/user.controller');

const router = Router();

// /api/user + /get
router.get('/get', get);

// /api/user + /update
router.patch('/update', update);

module.exports = router;
