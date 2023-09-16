const fs = require('fs');

const countStudents = (path) => {
  try {
    const content = fs.readFileSync(path).toString().split('\n');
    const students = content.filter((item) => item).map((item) => item.split(','));

    const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    const fields = {};
    for (let i = 1; i < students.length; i += 1) {
      const field = students[i][3];
      if (fields[field]) {
        fields[field].push(students[i][0]);
      } else {
        fields[field] = [students[i][0]];
      }
    }

    for (const [key, val] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
