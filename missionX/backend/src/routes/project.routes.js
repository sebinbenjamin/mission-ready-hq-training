const { Router } = require('express');
const { get, getOne, update } = require('../controllers/project.controller');

const router = Router();

// GET /api/projects/
router.get('/', get);

// GET /api/projects/:id/
router.get('/:id', getOne);

// PATCH /api/projects/ 
router.patch('/', update);

module.exports = router;
