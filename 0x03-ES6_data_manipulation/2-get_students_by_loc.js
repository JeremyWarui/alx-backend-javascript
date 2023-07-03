export default function getStudentsByLocation(array, city) {
  if (Array.isArray(array)) {
    return array.filter((item) => item.location === city);
  }
}
