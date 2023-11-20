const express = require('express');

const router = express.Router();

const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentController');

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getStudents);
router.get('/students/:major', StudentsController.getStudentsByMajor);

module.exports = router;
