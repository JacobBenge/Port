// Call stack tool example
// Open index.html and go to Sources to open the debugger. Use arrow buttons to show and hide.
// set a break point, then step through to see the order of execution and the values as they are passed.
const multiply = (x,y) => x * y;

const square = x => multiply(x,x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)

isRightTriangle(3,4,5)
isRightTriangle(3,4,6)