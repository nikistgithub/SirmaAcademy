function sumNumbers(a, b, c, d){
    const sum = a + b + c + d;
    return sum;
}

function partialSum(){
    const fixedNumber = 5;
    return function(b, c, d) {
        return sumNumbers(fixedNumber, b, c, d);
    };
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3));