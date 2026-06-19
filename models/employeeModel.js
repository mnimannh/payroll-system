const db = require('../db');

// payroll formula (DO NOT CHANGE)
function calculatePayroll(basic_salary, allowance) {
  const gross = Number(basic_salary) + Number(allowance);
  const tax = gross * 0.05; // 5%
  const net = gross - tax;
  return { gross, tax, net };
}

// Helper for data validation
function validateData(data) {
  const { name, position, basic_salary, allowance } = data;

  if (!name || name.trim() === '') throw new Error("Name is required");
  if (!position || position.trim() === '') throw new Error("Position is required");

  const bs = parseFloat(basic_salary);
  const al = parseFloat(allowance);

  if (isNaN(bs) || bs <= 0) throw new Error("Basic salary must be a positive number");
  if (isNaN(al) || al < 0) throw new Error("Allowance must be a non-negative number");
  
  return { name: name.trim(), position: position.trim(), bs, al };
}

// GET all employees
async function getAll() {
  const [rows] = await db.query(`SELECT * FROM employees`);
  return rows;
}

// GET by id
async function getById(id) {
  const [rows] = await db.query(`SELECT * FROM employees WHERE id = ?`, [id]);
  return rows[0];
}

// CREATE
async function create(data) {
  const validated = validateData(data); // Validate before database interaction

  const [result] = await db.query(
    `INSERT INTO employees (name, position, basic_salary, allowance) VALUES (?, ?, ?, ?)`,
    [validated.name, validated.position, validated.bs, validated.al]
  );
  return result;
}

// UPDATE
async function update(id, data) {
  const validated = validateData(data); // Validate before database interaction

  const [result] = await db.query(
    `UPDATE employees SET name=?, position=?, basic_salary=?, allowance=?, updated_at=CURRENT_TIMESTAMP WHERE id=?`,
    [validated.name, validated.position, validated.bs, validated.al, id]
  );
  return result;
}

// DELETE
async function remove(id) {
  const [result] = await db.query(`DELETE FROM employees WHERE id=?`, [id]);
  return result;
}

module.exports = {
  calculatePayroll,
  getAll,
  getById,
  create,
  update,
  remove
};