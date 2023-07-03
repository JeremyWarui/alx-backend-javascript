export default function getListStudentsIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((item) => item.id);
  }
  return [];
}
