require("dotenv").config();

const express = require("express");

const app = express();

// view engine
app.set("view engine", "ejs");

// built-in body parser (no need for body-parser package)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/employees", require("./routes/employees"));

// home route
app.get("/", (req, res) => {
  res.redirect("/employees");
});

// start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});