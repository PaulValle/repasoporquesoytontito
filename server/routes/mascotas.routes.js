const express = require('express');
const router = express.Router();

const mascota = require('../controllers/mascota.controller');

router.get('/', mascota.getMascotas);
router.post('/', mascota.createMascota);
router.get('/:id', mascota.getMascota);
router.put('/:id', mascota.editMascota);
router.delete('/:id', mascota.deleteMascota);

module.exports = router;