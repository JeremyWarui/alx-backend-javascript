const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      else {
        const studentData = data.split('\n');
        const students = studentData.filter((student) => student !== '')
          .map((student) => student.split(','));
        students.shift();
        const noOfStudents = students.length ? students.length : 0;
        
	const logMessages = [];
	let msg = `Number of students: ${noOfStudents}`;
	logMessages.push(msg);
	console.log(`Number of students: ${noOfStudents}`);
	
        const fields = {};

        for (const student of students) {
          const field = student[3];
          if (!fields[field]) fields[field] = [];
          fields[field].push(student[0]);
        }

        for (const [field, students] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
	  msg = `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
	  logMessages.push(msg);
        }

        resolve(logMessages);
      }
    });
  });
}

module.exports = countStudents;
