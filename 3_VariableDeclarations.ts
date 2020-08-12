/*
Application which demonstate diffrent ways in which we can create variable.
*/

// Variable declared with data type and initialization
var name1:string = "PUCSD";
console.log(name1);
console.log(typeof(name1));

// Variable declared with data type only.
var name2:string;
console.log(name2);
console.log(typeof(name2));

// Variable declared without data type. 
//Data type is predicted upon the initialization
var name3 = "PUCSD";
console.log(name3);
console.log(typeof(name3));

// Data type is considered as any
var name4;
console.log(name4);
console.log(typeof(name4));
