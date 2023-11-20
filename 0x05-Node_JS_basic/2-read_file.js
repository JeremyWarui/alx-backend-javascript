const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const studentData = data.toString().split('\n');

    let students = studentData.filter((student) => student);
    students = students.map((student) => student.split(',')).slice(1);
    // console.log(students);
    const fields = {};

    const NUMBER_OF_STUDENTS = students.length ? students.length : 0;

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    for (const student of students) {
      const field = student[3];
      if (!fields[field]) fields[field] = [];
      fields[field].push(student[0]);
    }

    Object.entries(fields).forEach(([field, list]) => {
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load database');
  }
};

module.exports = countStudents;
