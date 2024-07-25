function multiply(a, b) {
    return a * b;
}

const multiplyByFive = multiply.bind(3, 5);
console.log(multiplyByFive(3));