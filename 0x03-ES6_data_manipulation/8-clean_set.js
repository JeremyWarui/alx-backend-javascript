export default function cleanSet(set, startString) {
  if (startString.length > 0) {
    const array = [];
    for (const item of set) {
      if (item.startsWith(startString)) {
        array.push(item.slice(startString.length));
      }
    }
    return array.join('-');
  }
  return '';
}
