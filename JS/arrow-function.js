
// Function Declaretion
function declaretion(sum1, sum2) {
    const sum = sum1 + sum2
    return sum
}



// Anonymous Function Expression
const anonymous = function (sum1, sum2) {
    return sum1 + sum2
}

// function Expression 
const expression2 = function expression2(num1, num2) {
    return num1 + num2
}

// Arrow-Function 
const arrow4 = (num1, num2) => num1 + num2

const sumTotal = declaretion(32, 43)
const sumTotal1 = anonymous(32, 43)
const sumTotal3 = expression2(32, 43)
const sumTotal4 = arrow4(32, 43)

console.log(sumTotal, sumTotal1, sumTotal3, sumTotal4)