export default function getStudentIdsSum(array) {
  return array.reduce((prev, curr) => prev + curr.id, 0);
}
