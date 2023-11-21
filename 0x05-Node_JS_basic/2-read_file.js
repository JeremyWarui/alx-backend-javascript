const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const studentData = data.split('\n');
  const students = studentData.filter((student) => student !== '')
    .map((student) => student.split(','));
  students.shift();

  const noOfStudents = students.length ? students.length : 0;
  console.log(`Number of students: ${noOfStudents}`);

  const fields = {};

  for (const student of students) {
    const field = student[student.length - 1];
    if (!fields[field]) fields[field] = [];
    fields[field].push(student[0]);
  }

  for (const [field, students] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
}

module.exports = countStudents;
