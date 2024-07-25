const double = (number) => number * 2;
const square = (number) => number * number;

const compose = (double, square) => (number) => square(double(number));

const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3));