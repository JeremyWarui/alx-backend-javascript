const fs = require('fs');

const countStudents = (path) => {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load database');
  }
  const studentData = data.toString().split('\n');

  let students = studentData.filter((student) => student);
  students = students.map((student) => student.split(',')).slice(1);
  // console.log(students);
  const fields = {};

  const NUMBER_OF_STUDENTS = students.length;

  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  for (const student of students) {
    if (student[3]) {
      const field = student[3];
      if (!fields[field]) fields[field] = [];
      fields[field].push(student[0]);
    }
  }

  Object.entries(fields).forEach(([field, list]) => {
    if (field && list) {
      console.log(
        `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`,
      );
    }
  });
};

module.exports = countStudents;
