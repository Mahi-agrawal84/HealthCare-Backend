const express = require('express');
const cors = require('cors');
require('dotenv').config();
const createTables = require('./models/setupTables');

const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const mappingRoutes = require('./routes/mappingRoutes');

const app = express();

app.use(express.json());
app.use(cors());

// Initialize database tables
createTables();

// API Routes matching exact assignment endpoints
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/mappings', mappingRoutes);

app.get('/', (req, res) => {
  res.send('Healthcare Backend API is running...');
});

const PORT = process.env.PORT || 5000;
app.loadServer = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;