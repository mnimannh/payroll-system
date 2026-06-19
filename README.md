# 💼 Employee Payroll Management System

A simple web-based Payroll Management System built for a Junior Web Developer technical assessment.

It allows CRUD operations for employees and calculates monthly net salary using a fixed payroll formula.

---

## 🚀 Tech Stack
- Backend: Node.js (Express.js)
- Frontend: EJS (Server-side rendering)
- Database: MySQL 8.0
- Containerization: Docker + Docker Compose
- Language: JavaScript (ES6)

---

## 🏗️ Architecture
Browser → Routes (Controller) → Model (Business Logic + DB) → MySQL Database → Views (EJS)

- Routes → Handle HTTP requests (CRUD + payslip)
- Models → Database queries + payroll logic
- Views → UI pages rendered using EJS
- Database → MySQL in Docker container

---

## 📊 Payroll Formula
Gross Pay = Basic Salary + Allowance  
Tax (5%) = Gross Pay × 0.05  
Net Pay = Gross Pay − Tax  

---

## ⚙️ Features
- Create employee
- Read employee list
- Update employee details
- Delete employee
- View payslip with breakdown

---

## 🐳 Run with Docker

### 1. Create .env
DB_HOST=db  
DB_USER=root  
DB_PASSWORD=your_secure_password_here  
DB_NAME=payroll  

MYSQL_ROOT_PASSWORD=your_secure_root_password_here  
MYSQL_DATABASE=payroll  

---

### 2. Start project
docker compose up --build  

Open:
http://localhost:3000/employees  

---

## 💻 Run Locally
npm install  
node app.js  

Open:
http://localhost:3000/employees  

---

## 🔄 Refresh / Reset

Rebuild:
docker compose up --build  

Full reset (WILL DELETE DB):
docker compose down -v  
docker compose up --build  

---

## 📌 Notes
- MySQL runs in Docker container
- schema.sql auto-runs on first startup
- Data persists using Docker volumes
- Use docker compose down -v to fully reset database