/* eslint-disable no-plusplus */
// eslint-disable-next-line consistent-return
export default function createIteratorObject(report) {
  const arr = Object.values(report)[0];
  const myobj = Object.entries(arr);
  for (const key in myobj) {
    // eslint-disable-next-line no-prototype-builtins
    if (myobj.hasOwnProperty(key)) {
      return myobj[key];
    }
  }
}
