const router = require('express').Router();
const {pool} = require('../db/index')
module.exports = router;

//Route
router.get('/', async (req,res,next) =>{
    try{
        const allStudents = await pool.query(`SELECT * FROM students`);
        console.log('Query Result: ', allStudents)
        res.json(allStudents);
    } catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
});