// Example 1
var flag = true;
flag = false;
console.log(flag);
// Example 2
var flag1 = 999;
var myStr = 'User';
console.log(flag1);
console.log(myStr);
// For Arrays
var myArr = [1, 2, 3,];
console.log(myArr);
var myArr1 = [1, 2, 3, 4, 'Arrays'];
console.log(myArr1);
//Enums
// *Used to store number
// *Cannot be modified
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.73] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
    myConstants[myConstants["log5"] = 0.7] = "log5";
})(myConstants || (myConstants = {}));
var radius = 10;
// console.log(myConstants);
console.log('Find the circumference of the circle');
console.log(2 * myConstants.pi * radius);
// Functions 
var addNums = function (num1, num2) { return num1 + num2; };
console.log("Example of Functions:");
console.log(addNums(10, 20));
var addNums1 = function (num1, num2) {
    if (typeof num1 == 'string') {
        if (isNaN(parseInt(num1))) {
            return 0;
        }
        num1 = parseInt(num1);
    }
    return num1 + num2;
};
console.log(addNums1('10', 20));
// Default Arguments 
console.log("Example of Default Arguments:");
var areaofEllipse = function (r1, r2) {
    if (r2 === void 0) { r2 = r1; }
    return Math.PI * r1 * r2;
};
console.log(areaofEllipse(2));
// Optional Arguments 
console.log("Example of Optional Arguments:");
var areaOfSquare = function (side, isInteger) {
    if (isInteger) {
        return Math.floor(side * side);
    }
    return side * side;
};
console.log(areaOfSquare(2.5, false));
function areaOfQuad(side1, side2, side3, side4) {
    if (side2 === undefined && side3 === undefined && side4 === undefined) {
        side2 = side3 = side4;
        return side1 * side2;
    }
    else if (side3 === undefined && side4 === undefined) {
        side3 = side1;
        side4 = side2;
        return side1 * side2;
    }
    return -1;
}
areaOfQuad(1); //Square
areaOfQuad(1, 2); // Rectangle
areaOfQuad(1, 2, 3, 4); // Trapezium
