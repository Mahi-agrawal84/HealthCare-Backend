const pool = require('../config/db');

const addPatient = async (req, res) => {
  try {
    const { name, age, gender, contact, address } = req.body;
    const userId = req.user.id;

    const newPatient = await pool.query(
      'INSERT INTO patients (name, age, gender, contact, address, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, age, gender, contact, address, userId]
    );
    res.status(201).json(newPatient.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPatients = async (req, res) => {
  try {
    const userId = req.user.id;
    const patients = await pool.query('SELECT * FROM patients WHERE user_id = $1', [userId]);
    res.json(patients.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await pool.query('SELECT * FROM patients WHERE id = $1', [id]);
    if (patient.rows.length === 0) return res.status(404).json({ error: 'Patient not found' });
    res.json(patient.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender, contact, address } = req.body;
    const updated = await pool.query(
      'UPDATE patients SET name = $1, age = $2, gender = $3, contact = $4, address = $5 WHERE id = $6 RETURNING *',
      [name, age, gender, contact, address, id]
    );
    if (updated.rows.length === 0) return res.status(404).json({ error: 'Patient not found' });
    res.json(updated.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await pool.query('DELETE FROM patients WHERE id = $1 RETURNING *', [id]);
    if (deleted.rows.length === 0) return res.status(404).json({ error: 'Patient not found' });
    res.json({ message: 'Patient deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addPatient, getPatients, getPatientById, updatePatient, deletePatient };