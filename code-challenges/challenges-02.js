 "use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the reversed array.
//  Without using built-in methods.
//  Input: ['C#', 'JS', 'Ruby','Python']
//  Output: ['Python','Ruby','JS','C#']

let arr2=[];
var arr=['C#', 'JS', 'Ruby','Python'];
 function reverseArray(arr) {
  let j=0;
  for (let i =arr.length-1;i >= 0;i--) {
      if( j<arr.length){
            arr2[j]=(arr[i]);
            j++;
  };
  };
  return arr2;
}
reverseArray(arr);
console.log(arr2);

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

//  Challenge 2:
// Required:

//  Write a function that takes an array of numbers and increases its values by 10
//
//  Input: [20, 54, 89, 41]
//  Output: [30, 64, 99, 51]

let arr1=[];
var arr=[20, 54, 89, 41];
 function arrInc(arr){
     let m=0;
  for (let i =0;i < arr.length;i++) {
      if(m<arr.length){
   arr1[m]=(arr[i]+10);
   m++;
  } ;
  };
  return arr1;
 }
 arrInc(arr);
console.log(arr1);
// -------------------------------------------------------------------------------------------------------

module.exports = {reverseArray,arrInc };
