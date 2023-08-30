/* eslint-disable guard-for-in */
const fs = require('fs');

function countStudents(path) {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));

      const messages = [];
      let message;

      const content = data.toString().split('\n');
      let students = content.filter((item) => item);
      students = students.map((item) => item.split(','));

      const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
      message = `Number of students: ${NUMBER_OF_STUDENTS}`;
      console.log(message);
      messages.push(message);

      const columns = {};

      for (const i in students) {
        if (i !== 0) {
          if (!columns[students[i][3]]) columns[students[i][3]] = [];
          columns[students[i][3]].push(students[i][0]);
        }
      }

      delete columns.column;

      for (const key of Object.keys(columns)) {
        message = `Number of students in ${key}: ${
          columns[key].length
        }. List: ${columns[key].join(', ')}`;

        console.log(message);
        messages.push(message);
      }
      resolve(messages);
    });
  };
  return new Promise(promise);
}

module.exports = countStudents;
