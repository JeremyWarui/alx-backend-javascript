const fs = require('fs');

const countStudents = (path) => {
  try {
    const content = fs.readFileSync(path).toString().split('\n');
    let students = content.filter((item) => item);
    students = students.map((item) => item.split(','));

    const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    const rows = {};
    for (const row in students) {
      if (row !== 0) {
        if (!rows[students[row][3]]) rows[students[row][3]] = [];
        rows[students[row][3]].push(students[row][0]);
      }
    }

    delete rows.row;

    for (const key of Object.keys(rows)) {
      console.log(
        `Number of students in ${key}: ${rows[key].length}. List: ${rows[
          key
        ].join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
