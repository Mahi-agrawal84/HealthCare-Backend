<div align="center">

# 🏥 Healthcare Backend System

<p align="center">
  <b>A robust and secure RESTful API built for modern healthcare management systems</b>
</p>

<p align="center">
  <img src="[https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)" alt="Node.js" />
  <img src="[https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)" alt="Express.js" />
  <img src="[https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)" alt="PostgreSQL" />
  <img src="[https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSONWebTokens&logoColor=white](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSONWebTokens&logoColor=white)" alt="JWT" />
  <img src="[https://img.shields.io/badge/License-MIT-green.svg](https://img.shields.io/badge/License-MIT-green.svg)" alt="License" />
</p>

</div>

---

## 📖 About The Project
The **Healthcare Backend System** is an enterprise-grade backend service designed to streamline hospital and clinic operations. It provides secure authentication, comprehensive patient and doctor management modules, and relationship-mapping functionalities to handle patient-doctor assignments seamlessly.

---

## 🛠️ Built With
* **Runtime Environment:** [Node.js](https://nodejs.org/)
* **Web Framework:** [Express.js](https://expressjs.com/)
* **Database:** [PostgreSQL](https://www.postgresql.org/) (via `pg` pool connection)
* **Authentication & Security:** JSON Web Tokens (`jsonwebtoken`) & `bcryptjs` for secure password hashing

---

## 📂 Project Directory Structure

```text
healthcare-backend/
├── src/
│   ├── config/          # Database configuration & pool initialization
│   ├── controllers/     # Business logic for Auth, Patients, Doctors, & Mappings
│   ├── middleware/      # JWT verification & authorization middleware
│   ├── models/          # Automated database schema creation setup
│   └── routes/          # Express API route endpoints
├── .env.example         # Template for environment variables
├── .gitignore           # Git ignore configurations
├── package.json         # Project dependencies & scripts
└── README.md            # Project documentation
```

---

## ⚙️ Getting Started & Installation

To get a local copy up and running, follow these simple steps:

### 1. Clone the Repository
```bash
git clone <your-github-repo-url>
cd healthcare-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and configure your credentials:
```env
PORT=5000
DATABASE_URL=postgres://username:password@localhost:5432/healthcare_db
JWT_SECRET=your_super_secret_key_here
```

### 4. Run the Application
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

---

## 🔌 API Endpoints Reference

### 🔐 1. Authentication APIs
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new system user | Public |
| `POST` | `/api/auth/login` | Authenticate user & return JWT token | Public |

### 🧑‍⚕️ 2. Patient Management APIs
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/patients/` | Add a new patient record | Protected |
| `GET` | `/api/patients/` | Retrieve all patients | Protected |
| `GET` | `/api/patients/:id` | Get patient details by ID | Protected |
| `PUT` | `/api/patients/:id` | Update patient record | Protected |
| `DELETE` | `/api/patients/:id` | Remove a patient record | Protected |

### 🩺 3. Doctor Management APIs
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/doctors/` | Register a new doctor | Protected |
| `GET` | `/api/doctors/` | Retrieve all doctors list | Protected |
| `GET` | `/api/doctors/:id` | Get doctor details by ID | Protected |
| `PUT` | `/api/doctors/:id` | Update doctor info | Protected |
| `DELETE` | `/api/doctors/:id` | Remove a doctor record | Protected |

### 🔗 4. Patient-Doctor Mapping APIs
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/mappings/` | Assign a doctor to a patient | Protected |
| `GET` | `/api/mappings/` | View all active mappings | Protected |
| `GET` | `/api/mappings/:patient_id` | Get doctors assigned to a patient | Protected |
| `DELETE` | `/api/mappings/:id` | Remove a doctor assignment | Protected |

---

## 🛡️ License
Distributed under the **MIT License**. See `LICENSE` for more information.
