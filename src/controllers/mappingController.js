const pool = require('../config/db');

const assignDoctor = async (req, res) => {
  try {
    const { patient_id, doctor_id } = req.body;
    const mapping = await pool.query(
      'INSERT INTO patient_doctor_mapping (patient_id, doctor_id) VALUES ($1, $2) RETURNING *',
      [patient_id, doctor_id]
    );
    res.status(201).json({ message: 'Doctor assigned to patient successfully', mapping: mapping.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMappings = async (req, res) => {
  try {
    const mappings = await pool.query(`
      SELECT pdm.id, p.name AS patient_name, d.name AS doctor_name, d.specialization 
      FROM patient_doctor_mapping pdm
      JOIN patients p ON pdm.patient_id = p.id
      JOIN doctors d ON pdm.doctor_id = d.id
    `);
    res.json(mappings.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDoctorsByPatientId = async (req, res) => {
  try {
    const { patient_id } = req.params;
    const doctors = await pool.query(`
      SELECT d.* FROM patient_doctor_mapping pdm
      JOIN doctors d ON pdm.doctor_id = d.id
      WHERE pdm.patient_id = $1
    `, [patient_id]);
    res.json(doctors.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const removeMapping = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await pool.query('DELETE FROM patient_doctor_mapping WHERE id = $1 RETURNING *', [id]);
    if (deleted.rows.length === 0) return res.status(404).json({ error: 'Mapping not found' });
    res.json({ message: 'Doctor unassigned from patient successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { assignDoctor, getMappings, getDoctorsByPatientId, removeMapping };