export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const intView = new DataView(buff, 0);
  if (position >= length - 1) {
    throw new Error('Position outside range');
  }
  intView.setInt8(position, value);
  return intView;
}
