export default function cleanSet(set, startString) {
  if (startString.length > 0 && set instanceof Set) {
    const array = [];
    for (const item of set) {
      if (item && item.startsWith(startString)) {
        array.push(item.slice(startString.length));
      }
    }
    return array.join('-');
  }
  return '';
}
