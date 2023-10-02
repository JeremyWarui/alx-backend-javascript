const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const output = [];
        const title = 'This is the list of our students';
        output.push(title);
        for (const [key, val] of Object.entries(fields)) {
          const message = `Number of students in ${key}: ${
            val.length
          }. List: ${val.join(', ')}`;
          output.push(message);
        }
        response.send(200, `${output.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(DATABASE)
        .then((fields) => {
          const students = fields[major];
          response.send(200, `List: ${students.join(', ')}`);
        })
        .catch(() => {
          response.send(500, 'Cannot load the database');
        });
    }
  }
}

module.exports = StudentsController;
