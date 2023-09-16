/* eslint-disable guard-for-in */
const fs = require('fs');

function countStudents(path) {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const content = data.toString().split('\n');
        const students = content.filter((item) => item).map((item) => item.split(','));

        const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
        console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

        const fields = {};

        for (let i = 1; i < students.length; i += 1) {
          const field = students[i][3];
          // if field exists add a student to the students array
          if (fields[field]) {
            fields[field].push(students[i][0]);
          } else {
            // add an array of students
            fields[field] = [students[i][0]];
          }
        }

        for (const [key, val] of Object.entries(fields)) {
          console.log(`Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`);
        }
        resolve();
      }
    });
  };
  return new Promise(promise);
}

module.exports = countStudents;
