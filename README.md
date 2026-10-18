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

⚙️ Setup & Installation Instructions

1. Clone the repository:
