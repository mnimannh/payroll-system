# 💼 Employee Payroll Management System

A simple web-based Payroll Management System built for a Junior Web Developer technical assessment.

It allows CRUD operations for employees and calculates monthly net salary using a fixed payroll formula.

---

## 🚀 Tech Stack

- Backend: Node.js (Express.js)
- Frontend: EJS (Server-side rendering)
- Database: MySQL
- Containerization: Docker + Docker Compose
- Language: JavaScript (ES6)

---

## 🏗️ Architecture

This project follows a simple MVC structure:

Browser → Routes (Controller) → Model (Business Logic + DB) → SQLite Database → Views (EJS)

### Layers:
- Routes → Handle HTTP requests (CRUD + payslip)
- Models → Database queries + payroll calculation
- Views → UI pages rendered using EJS
- Database: MySQL 8.0 (running in a separate Docker container)

---

## 📊 Payroll Formula (Fixed Requirement)

Gross Pay = Basic Salary + Allowance  
Tax (5%) = Gross Pay × 0.05  
Net Pay = Gross Pay − Tax  

---

## ⚙️ Features

- Create employee
- Read employee list
- Update employee details
- Delete employee
- View payslip with salary breakdown

---

## 🐳 Run with Docker (Recommended)

1.Ensure you have an .env file in the root directory based on the following template:

--Code snippet--

DB_HOST=db
DB_USER=root
DB_PASSWORD=your_secure_password_here
DB_NAME=payroll
MYSQL_ROOT_PASSWORD=your_secure_root_password_here
MYSQL_DATABASE=payroll

2.Build and start the containers:

docker compose up --build
Access the application at: http://localhost:3000/employees

---

## 💻 Run Locally (Without Docker)

npm install  
node app.js  

Then open:
http://localhost:3000/employees

---

## 🔄 Refreshing the Application

1.For Code Changes: docker compose up --build
2.For Database/Config Changes: docker compose down -v && docker compose up --build
(Warning: down -v will delete all existing data and reset the database.)


## 📁 Project Structure

payroll-system/
├── app.js
├── schema.sql           # Database initialization script
├── Dockerfile
├── docker-compose.yml
├── .env                 # Environment configuration
├── package.json
├── /models
│   └── employeeModel.js
├── /routes
│   └── employees.js
└── /views
    ├── list.ejs
    ├── form.ejs
    └── payslip.ejs

---

## 📌 Assumptions ⚠️ Notes

--Database: The application expects a MySQL instance. The schema.sql file in the project root is automatically executed by the MySQL container on the first startup.
--Environment: Database connection details are injected via environment variables.
--Persistence: Data is persisted using Docker volumes; use docker compose down -v if you need to wipe the database and start fresh.
--Permissions: The root user is configured to handle connections from the application container within the internal Docker network.





