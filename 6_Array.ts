/*
Application demonstrates concept of array.

Array is connsidered as homogeneous collections of elements srored inn contiguous memory locations and accessed usinng inndex.

There are diffrent ways in which we can create array.
*/

// Create array and then initialise
var arr1:number[];
arr1 = [1, 2, 3, 4, 5];

// Create and initialise the array
var arr2:number[] = [11, 21, 51, 101]; 

// Create array using Array class object
var arr3:number[] = new Array(4)  
arr3 = [1,2,3,4];

// Traverse array using for loop
for(var i = 0; i < arr3.length; i++) 
{ 
   console.log(arr3[i]); 
}

// Createing array of strings
var subject:string[] = new Array("PPA","PYTHON","UNIX","NODE","ANGULAR"); 

for(var i = 0;i<subject.length;i++) 
{ 
   console.log(subject[i]); 
}