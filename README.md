# 🏥 Healthcare Backend System

A robust backend RESTful API built for a healthcare application using **Node.js, Express.js, PostgreSQL**, and **JWT Authentication**.

---

## 🚀 Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL (with `pg` pool)
* **Authentication:** JSON Web Tokens (JWT) & bcryptjs for password hashing

---

## 📂 Project Directory Structure
```text
healthcare-backend/
├── src/
│   ├── config/          # Database connection
│   ├── controllers/     # Business logic for Auth, Patients, Doctors, Mappings
│   ├── middleware/      # JWT Authentication middleware
│   ├── models/          # Automatic PostgreSQL table creation setup
│   └── routes/          # Express API route endpoints
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd healthcare-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory based on `.env.example` and update your PostgreSQL credentials.

4. **Run the Application:**
   ```bash
   npm run dev
   ```

---

## 🔌 API Endpoints Documentation

### 1. Authentication APIs
* `POST /api/auth/register` - Register a new user (Name, email, password)
* `POST /api/auth/login` - Log in a user and return a JWT token

### 2. Patient Management APIs *(Authenticated)*
* `POST /api/patients/` - Add a new patient
* `GET /api/patients/` - Retrieve all patients created by the logged-in user
* `GET /api/patients/:id` - Get details of a specific patient
* `PUT /api/patients/:id` - Update patient details
* `DELETE /api/patients/:id` - Delete a patient record

### 3. Doctor Management APIs *(Authenticated)*
* `POST /api/doctors/` - Add a new doctor
* `GET /api/doctors/` - Retrieve all doctors
* `GET /api/doctors/:id` - Get details of a specific doctor
* `PUT /api/doctors/:id` - Update doctor details
* `DELETE /api/doctors/:id` - Delete a doctor record

### 4. Patient-Doctor Mapping APIs *(Authenticated)*
* `POST /api/mappings/` - Assign a doctor to a patient
* `GET /api/mappings/` - Retrieve all patient-doctor mappings
* `GET /api/mappings/:patient_id` - Get all doctors assigned to a specific patient
* `DELETE /api/mappings/:id` - Remove a doctor assignment
