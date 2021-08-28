const express = require('express')
const { mean, median, mode } = require('./helpers')
const ExpressError = require('./errors')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  if (!req.query.nums) {
    let noNumsError = new ExpressError(
      `Nums are required. Please try again.`,
      400
    )
    return next(noNumsError)
  }

  let arr = req.query.nums.split(',')
  res.locals.arr = []
  
  arr.forEach((num) => {
    let item = Number(num)
    if (Number.isNaN(item)) {
      let notANumberError = new ExpressError(`${num} is not a number. Please try again.`, 400)
      return next(notANumberError)
    }
    res.locals.arr.push(item)
  })
  next()
})

app.get('/mean', function (req, res) {
  let ans = mean(res.locals.arr) 
  return res.status(200).json({
    response: {
      operation: 'mean',
      value: ans
    }
  })
})

app.get('/median', function (req, res) {
  let ans = median(res.locals.arr)
  return res.status(200).json({
    response: {
      operation: 'median',
      value: ans
    }
  })
})

app.get('/mode', function (req, res) {
  let ans = mode(res.locals.arr)
  return res.status(200).json({
    response: {
      operation: 'mode',
      value: ans
    }
  })
})

// 404 handler
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});

// generic error handler
app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});

app.listen(3000, function () {
  console.log('App on port 3000')
})