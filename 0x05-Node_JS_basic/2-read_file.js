const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const studentData = data.trim().split('\n');

    let students = studentData.filter((student) => student);
    students = students.map((student) => student.split(',')).slice(1);
    // console.log(students);
    const NUMBER_OF_STUDENTS = students.length;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    const fields = {};

    for (const student of students) {
      const field = student[3];
      if (!fields[field]) fields[field] = [];
      fields[field].push(student[0]);
    }
    for (const [field, students] of Object.entries(fields)) {
      if (field) {
        console.log(
          `Number of students in ${field}: ${students.length}. List: ${students.join(
            ', ',
          )}`,
        );
      }
    }
  } catch (err) {
    throw new Error('Cannot load database');
  }
};

module.exports = countStudents;
