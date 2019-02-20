const express = require('express');
const router = express.Router();

const worker = require('../controllers/worker.controller');

router.get('/', worker.getWorkers);
router.post('/', worker.createWorker);
router.get('/:id', worker.getWorker);
router.put('/:id', worker.editWorker);
router.delete('/:id', worker.deleteWorker);

module.exports = router;