const add1 = (num1, num2) => num1 + num2
const sumadd = add1(20, 40)
console.log(sumadd);

// Three parameter Arrow Function 
const add3 = (num1, num2, num3) => num1 + num2 + num3
const sumadd3 = add3(43, 46, 32)
console.log(sumadd3)
// arow Function of this multiply work
const multiply = (num1, num2, num3) => num1 * num2 * num3
const multiplyadd = multiply(32, 5, 2)
console.log(multiplyadd)

// single parameter of arrow function
const single = singleNum => singleNum * 10
const singleadd = single(54)
console.log(singleadd)

// MultiLine Arrow Function 
const multiLine = (num1, num2) => {
    const sum = num1 + num2
    const diff = num1 - num2
    const result = sum * diff
    const total = result + 450
    const output = total / 10
    return output
}
const multiLineadd = multiLine(104, 58)
console.log(multiLineadd)