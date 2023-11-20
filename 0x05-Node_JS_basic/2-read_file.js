const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const studentData = data.split('\n');

    let students = studentData.filter((student) => student);
    students = students.map((student) => student.split(',')).slice(1);
    console.log(students);
    const fields = {};

    for (const student of students) {
      if (student[3]) {
        const field = student[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(student[0]);
      }
    }

    const NUMBER_OF_STUDENTS = Object.values(fields).reduce(
      (acc, cur) => acc + cur.length,
      0,
    );
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    Object.entries(fields).forEach(([field, list]) => {
      if (field && list) {
        console.log(
          `Number of students in ${field}: ${list.length}. List: ${list.join(
            ', ',
          )}`,
        );
      }
    });
  } catch (err) {
    throw new Error('Cannot load database');
  }
};

module.exports = countStudents;
