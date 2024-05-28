const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { ValidateStringOfNums, findMode, findMean, findMedian } = require('./functions');

app.use(express.json());

//routes to find the results that will display the method used and the result
app.get('/mean', (req, res, next) => {
    if(!req.query.nums){
        throw new ExpressError('Need to pass a query called nums with Numbers seperated by ,')
    }
    let stringOfNums = req.query.nums.split(',');
    let nums = ValidateStringOfNums(stringOfNums);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation:'mean',
        result: findMean(nums)
    }

    return res.send(result);
})

app.get('/median', (req, res, next) => {
    if(!req.query.nums){
        throw new ExpressError('Need to pass a query called nums with Numbers seperated by ,')
    }
    let stringOfNums = req.query.nums.split(',');
    let nums = ValidateStringOfNums(stringOfNums);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'median',
        result: findMedian(nums)
    }

    return res.send(result);
})

app.get('/mode', (req, res, next) => {
    if(!req.query.nums){
        throw new ExpressError('Need to pass a query called nums with Numbers seperated by ,')
    }
    let stringOfNums = req.query.nums.split(',');
    let nums = ValidateStringOfNums(stringOfNums);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: 'mode',
        result: findMode(nums)
    }

    return res.send(result);
})

//////////////////////FUNCTION TO VERIFY AND DO EQUATIONS/////////////////////////////////////



//setting up the local host 3000
app.listen(3000, () => {
    console.log('App on port 3000')
})