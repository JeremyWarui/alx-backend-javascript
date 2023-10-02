const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      reject(error);
    } else {
      const content = data.toString().split('\n');
      const students = content.filter((item) => item).map((student) => student.split(','));
      const fields = {};

      for (let i = 1; i < students.length; i += 1) {
        const field = students[i][3];

        if (fields[field]) {
          fields[field].push(students[i][0]);
        } else {
          fields[field] = [students[i][0]];
        }
      }
      resolve(fields);
    }
  });
});

module.exports = readDatabase;
