// Example 1
var flag: boolean = true;
flag = false;
console.log(flag);



// Example 2
var flag1: number = 999;
var myStr: string = 'User';
console.log(flag1);
console.log(myStr);



// For Arrays
var myArr: number[] = [1, 2, 3,];
console.log(myArr);
var myArr1: any[] = [1, 2, 3, 4, 'Arrays'];
console.log(myArr1);



//Enums
// *Used to store number
// *Cannot be modified
enum myConstants {
    pi = 3.14,
    e = 2.73,
    log2 = 0.3,
    log5 = 0.7
}
let radius: number = 10;
// console.log(myConstants);
console.log('Find the circumference of the circle');
console.log(2 * myConstants.pi * radius);



// Functions 
let addNums = (num1: number, num2: number) => num1 + num2;
console.log(`Example of Functions:`);
console.log(addNums(10, 20));

let addNums1 = (num1: any, num2: number): number => {
    if(typeof num1 == 'string') {
        if(isNaN(parseInt(num1))) {
            return 0;
        }
        num1 = parseInt(num1);
    }
    return num1 + num2;
}
console.log(addNums1('10',20));



// Default Arguments 
console.log(`Example of Default Arguments:`);
let areaofEllipse = (r1: number, r2:number = r1) => Math.PI * r1 * r2;
console.log(areaofEllipse(2));