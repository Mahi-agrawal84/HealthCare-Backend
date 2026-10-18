const pool = require('../config/db');

const addDoctor = async (req, res) => {
  try {
    const { name, specialization, contact, email } = req.body;
    const newDoctor = await pool.query(
      'INSERT INTO doctors (name, specialization, contact, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, specialization, contact, email]
    );
    res.status(201).json(newDoctor.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDoctors = async (req, res) => {
  try {
    const doctors = await pool.query('SELECT * FROM doctors');
    res.json(doctors.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await pool.query('SELECT * FROM doctors WHERE id = $1', [id]);
    if (doctor.rows.length === 0) return res.status(404).json({ error: 'Doctor not found' });
    res.json(doctor.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, specialization, contact, email } = req.body;
    const updated = await pool.query(
      'UPDATE doctors SET name = $1, specialization = $2, contact = $3, email = $4 WHERE id = $5 RETURNING *',
      [name, specialization, contact, email, id]
    );
    if (updated.rows.length === 0) return res.status(404).json({ error: 'Doctor not found' });
    res.json(updated.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await pool.query('DELETE FROM doctors WHERE id = $1 RETURNING *', [id]);
    if (deleted.rows.length === 0) return res.status(404).json({ error: 'Doctor not found' });
    res.json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addDoctor, getDoctors, getDoctorById, updateDoctor, deleteDoctor };