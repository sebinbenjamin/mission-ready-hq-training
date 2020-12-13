const { Router } = require('express');
const { get, update } = require('../controllers/user.controller');

const router = Router();

router.get('/get', get);
router.patch('/update', update);

module.exports = router;
