const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { addPatient, getPatients, getPatientById, updatePatient, deletePatient } = require('../controllers/patientController');

router.post('/', verifyToken, addPatient);
router.get('/', verifyToken, getPatients);
router.get('/:id', verifyToken, getPatientById);
router.put('/:id', verifyToken, updatePatient);
router.delete('/:id', verifyToken, deletePatient);

module.exports = router;