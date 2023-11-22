import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DB) {
    readDatabase(DB).then((fields) => {
      const students = [];
      let msg = 'This is the list of our students';
      students.push(msg);

      for (const [field, list] of Object.entries(fields)) {
        msg = `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        students.push(msg);
      }
      response.status(200).send(`${students.join('\n')}`);
    }).catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response, DB) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(DB).then((fields) => {
        const students = fields[major];
        response.status(200).send(`List: ${students.join(', ')}`);
      }).catch(() => response.status(500).send('Cannot load the database'));
    }
  }
}

export default StudentsController;
