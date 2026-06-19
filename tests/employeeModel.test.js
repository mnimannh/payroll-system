const { calculatePayroll } = require("../models/employeeModel");

test("should calculate payroll correctly", () => {
  const result = calculatePayroll(1000, 200);

  expect(result.gross).toBe(1200);   // 1000 + 200
  expect(result.tax).toBe(60);       // 5% of 1200
  expect(result.net).toBe(1140);     // 1200 - 60
});