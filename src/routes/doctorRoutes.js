const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { addDoctor, getDoctors, getDoctorById, updateDoctor, deleteDoctor } = require('../controllers/doctorController');

router.post('/', verifyToken, addDoctor);
router.get('/', verifyToken, getDoctors);
router.get('/:id', verifyToken, getDoctorById);
router.put('/:id', verifyToken, updateDoctor);
router.delete('/:id', verifyToken, deleteDoctor);

module.exports = router;