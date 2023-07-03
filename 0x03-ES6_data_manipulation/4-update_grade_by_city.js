export default function updateStudentGradeByCity(array, city, newGrades) {
  const cityStud = array.filter((item) => item.location === city);
  return cityStud.map((student) => {
    const grades = newGrades.filter((item) => item.studentId === student.id)
      .map((stud) => stud.grade)[0];
    const grad = grades || 'N/A';
    return { ...student, grad };
  });
}
