const { mean, median, mode } = require('./helpers')

let arr

beforeEach(() => {
  arr = [6, 4, 5, 4, 2, 4, 3, 5, 1]
})

test('mean should return the average of array of numbers', () => {
  expect(mean(arr)).toBeCloseTo(3.4)
})

test('median should return the middle number from sorted array', () => {
  // Check odd length arr
  expect(median(arr)).toEqual(4)
  // Check even length arr
  arr.push(7)
  expect(median(arr)).toEqual(4)
})

test('mode should return the most common number in array', () => {
  expect(mode(arr)).toEqual(4)
  // Check for dual modes
  arr.push(5)
  expect(mode(arr)).toEqual(5)
})