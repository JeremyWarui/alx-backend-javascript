import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(Error(err));
      else {
        const studentData = data.split('\n');
        const students = studentData
          .filter((student) => student !== '')
          .map((student) => student.split(','));
        students.shift();
        const fields = {};

        for (const student of students) {
          const field = student[3];
          if (!fields[field]) fields[field] = [];
          fields[field].push(student[0]);
        }
        resolve(fields);
      }
    });
  });
}

export default readDatabase;
