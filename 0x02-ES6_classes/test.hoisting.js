/* eslint-disable jest/prefer-expect-assertions */
import listOfStudents, { StudentHolberton, HolbertonClass } from './9-hoisting';

describe('listOfStudents', () => {
  it('initialization works correctly', () => {
    expect(listOfStudents[0] instanceof StudentHolberton).toBe(true);
    expect(listOfStudents[0].holbertonClass instanceof HolbertonClass).toBe(true);
  });
});
