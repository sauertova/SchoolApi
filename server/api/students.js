const router = require("express").Router();
const { pool } = require("../db/index");
module.exports = router;

//Route: localhost:1338/api/students

//ROUTE: Get all students
router.get("/", async (req, res, next) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM students`);
    console.log("Query Result: ", rows);
    res.json(rows);
  } catch (err) {
    console.error("Error with all students", err);
    res.status(500).send("Server Error");
  }
});

//Get single student localhost:1338/api/students/student_id
router.get("/:student_id", async (req, res, next) => {
  try {
    const { student_id } = req.params; //const id = req.params.id
    const singleStudent = await pool.query(
      `SELECT * FROM students WHERE student_id = ${student_id}`
    );
    res.json(singleStudent.rows);
  } catch (err) {
    console.error("Error with individual student", err);
    res.status(500).send("Server Error");
  }
});

//Create student
router.post("/", async (req, res, next) => {
  try {
    const { fname, lname, email, birthdate } = req.body;
    const newStudent = await pool.query(
      `INSERT INTO students (fname, lname, email, birthdate) VALUES
($1, $2, $3, $4) RETURNING *`,
      [fname, lname, email, birthdate]
    );
    console.log(newStudent);
    res.status(201).json(newStudent.rows[0]);
  } catch (err) {
    console.error("Error creating a new student", err);
    res.status(500).send("Server Error");
  }
});

//Edit student
router.put("/:student_id", async (req, res, next) => {
  try {
    const { student_id } = req.params;
    const { fname, lname, email, birthdate } = req.body;
    const updatedStudent = await pool.query(
      `UPDATE students SET fname = $2, lname = $3, email = $4,
birthdate = $5 WHERE student_id = $1`,
      [student_id, fname, lname, email, birthdate]
    );
    res.status(201).json({
      message: `Student ${student_id} successfully updated`,
      data: updatedStudent.rows[0],
    });
  } catch (err) {
    console.error("Error updating student data: ", err);
    res.status(500).send("Server Error");
  }
});

//Delete student
router.delete("/:student_id", async (req, res, next) => {
  try {
    const { student_id } = req.params;
    await pool.query(`DELETE FROM students WHERE student_id = ${student_id}`);
    res.json(`Student ${student_id} successfully deleted`);
  } catch (err) {
    console.error("Error deleting student", err);
    res.status(500).send("Server Error");
  }
});