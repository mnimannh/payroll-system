const express = require('express');
const router = express.Router();

const Employee = require('../models/employeeModel');

// LIST EMPLOYEES
router.get('/', async (req, res) => {
  try {
    const rows = await Employee.getAll();
    res.render('list', { employees: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching employees");
  }
});

// SHOW ADD FORM
router.get('/new', (req, res) => {
  res.render('form', { employee: null });
});

// CREATE EMPLOYEE
router.post('/create', async (req, res) => {
  try {
    await Employee.create(req.body);
    res.redirect('/employees');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating employee");
  }
});

// SHOW EDIT FORM
router.get('/edit/:id', async (req, res) => {
  try {
    const row = await Employee.getById(req.params.id);
    res.render('form', { employee: row });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading employee");
  }
});

// UPDATE EMPLOYEE
router.post('/update/:id', async (req, res) => {
  try {
    await Employee.update(req.params.id, req.body);
    res.redirect('/employees');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating employee");
  }
});

// DELETE EMPLOYEE
router.get('/delete/:id', async (req, res) => {
  try {
    await Employee.remove(req.params.id);
    res.redirect('/employees');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting employee");
  }
});

// PAYSLIP VIEW
router.get('/payslip/:id', async (req, res) => {
  try {
    const emp = await Employee.getById(req.params.id);

    const payroll = Employee.calculatePayroll(
      emp.basic_salary,
      emp.allowance
    );

    res.render('payslip', {
      employee: emp,
      payroll
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating payslip");
  }
});

module.exports = router;