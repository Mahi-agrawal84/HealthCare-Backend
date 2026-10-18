const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { assignDoctor, getMappings, getDoctorsByPatientId, removeMapping } = require('../controllers/mappingController');

router.post('/', verifyToken, assignDoctor);
router.get('/', verifyToken, getMappings);
router.get('/:patient_id', verifyToken, getDoctorsByPatientId);
router.delete('/:id', verifyToken, removeMapping);

module.exports = router;