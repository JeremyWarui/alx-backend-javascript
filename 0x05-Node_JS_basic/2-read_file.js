const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const studentData = data.toString().split('\n');

    let students = studentData.filter((student) => student);
    students = students.map((student) => student.split(','));

    const fields = {};

    const getStudentsByField = (students, field) => {
      let studentField = students.filter((student) => (student[student.length - 1] === field));
      studentField = studentField.map((student) => student[0]);
      return studentField;
    };

    const studentsSWE = getStudentsByField(students, 'SWE');
    const studentsCS = getStudentsByField(students, 'CS');
    const noOfStudents = [...studentsSWE, ...studentsCS].length;
    console.log(`Number of students: ${noOfStudents}`);

    const setFields = (fieldsObj, [...fields], students) => {
      const newObj = { ...fieldsObj };
      for (const field of fields) {
        newObj[field] = getStudentsByField(students, field);
        console.log(`Number of students in ${field}: ${newObj[field].length}. List: ${newObj[field].join(', ')}`);
      }
      return newObj;
    };

    setFields(fields, ['CS', 'SWE'], students);
  } catch (err) {
    throw new Error('Cannot load database');
  }
};

module.exports = countStudents;
