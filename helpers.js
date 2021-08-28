/** Takes in array, sorts array, returns sorted array. */
function sortArr(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b)
  return sortedArr
}

/** Takes in array and sums all numbers then divides by amount of numbers (aka average) */
function mean(arr) {
  let sum = 0
  let divider = arr.length
  let mean

  for (const num of arr) {
    sum += num
  }

  mean = sum / divider
  return mean
}

/** Takes in array, finds the middle index (mid), sorts the array, determines if length is even or odd and returns the number at the mid index or, if even array length, returns the average of the two numbers in the middle.*/
function median(arr) {
  const mid = Math.floor(arr.length / 2)
  const nums = sortArr(arr)
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

/** Takes an array and finds the most common number. If two numbers are equally common returns the most common.*/
function mode(arr) {
  const sortedArr = sortArr(arr)
  const obj = {}
  let highestValue = 0
  // For comparison purposes must initialize as lowest possible number.
  let highestKey = -Infinity

  sortedArr.forEach((num) => {
    if (!obj[num]){
      obj[num] = 1
    }
    else {
      obj[num] += 1
    }
  })

  for (key in obj) {
    const val = obj[key]
    if (val >= highestValue && Number(key) > highestKey) {
      highestValue = val
      highestKey = Number(key)
    }
  }

  return highestKey
}

module.exports = {
  mean,
  median,
  mode
}