// var m = [2,7,1,11,157,13,22,144, -3];
//
// function sort(m) {
//   var tmp;
//   var n = m.length;
//     for (var i = 0; i < n-1; i++) {
//       for (var j = 0; j < n-i-1; j++) {
//         if (m[j]>m[j+1]) {
//           tmp = m[j];
//           m[j]=m[j+1];
//           m[j+1]= tmp;
//         }
//     }
//   }
//   console.log(m);
// }
// sort(m);

// Get sum of elements on even places in array

// var m = [0,1,2,3,4,5,6,7,8,9];
//
// function sumOfEven(m) {
//   var n = m.length;
//   var sum = 0;
//   for(var i = 0; i < n; i++) {
//     if (i%2==1) {
//         sum =sum + m[i];
//     }
//
//   }
//   return sum;
// }
//
// console.log(sumOfEven(m));
//

// var m = [2,7,4,5];
//
// function sumOfEven(m) {
//   var n = m.length;
//   var sum = 0;
//   for(var i = 0; i < n; i++) {
//     if (m[i]%2==1) {
//         sum =sum + m[i];
//     }
//   }
//   return sum;
// }
// console.log(sumOfEven(m));

// var m = [2,7,4,5,9];
//
// function out(m) {
//   var n = m.length;
//   for(var i = 0; i < n/2; i++) {
//     var x = n - i - 1;
//     console.log("i:"+m[i] +"x:"+ m[x] );
//
//   }
// }
// console.log(out(m));

// var m = [15,3,-7,4,13]; // [13,4,-7,3,15]
//   //
// function out(m) {
//   var n = m.length;
//   var tmp;
//   for(var i = 0; i < n/2; i++) {
//     var x = n - i - 1;
//     tmp = m[i];
//     m[i]=m[x];
//     m[x]=tmp;
//
//   }
//     return m;
// }
//
// console.log(out(m));

//
// var m = [1,2,14,-7,4,5,-9]
// function max(m) {
//    var n = m.length;
//   var max = m[0];
//   for (var i = 1; i < n; i++) {
//     if (max < m[i]) {
//         max = m[i];
//     }
//
//   }
//   return(max);
// }
//
// //-------------------------------------------------
//
// function findMax(m) {
//   console.log(m);
//   var left=[], right=[];
//   var n = m.length;
//   var rightBorder = parseInt(n/2);
//   var rightStart;
//
//   if (n%2==0) {
//     rightStart = rightBorder;
//   } else {
//     rightStart = rightBorder+1;
//   }
//
//   for (var i = 0; i < rightBorder; i++) {
//     var l = m[i]
//     left.push(l);
//   }
//   for (var i = rightStart; i < n; i++) {
//     var r = m[i];
//     right.push(r);
//   }
//   console.log("left "+ left);
//   console.log("right "+ right);
//   console.log(max(left));
//   console.log(max(right));
// }
//
// findMax([1,2,14,-7,4,5,-9]);
// findMax([1,2,14,-7,4,5]);


//
//  1) Write function that will change places of max and min element
//     a) use built in functions max and min of array
//     b) without use of built in functions. allowed to use only one cycle for
//     ExchangeMinMax([1, 20, 3, 6, 19, -7, 3]) should return [1, -7, 3, 6, 19, 20, 3]
//
//  2) Write function IndexOf which will return index of value in array
//     IndexOf(11, [17, 8, 9, 11, 3, 5]) should return 3
//     IndexOf(15, [17, 8, 9, 11, 3, 5]) should return -1
//
//  3) Write function which will check does array is a palindrom
//     IsPalindrom([1, 2, 3, 2, 1]) should return true
//     IsPalindrom([1, 2, 3, 2, 7]) should return false
//
//  4) Write function which will sort left part of array in descending order and right in ascending order.
//     Suppose that array always has even(like 10) length. It is allowed to use sort function from previous tasks
//     SortArrayParts([3, 1, 7, 6 , 5, 4]) should return [7, 1, 3, 4, 5, 6]
//
//  5) Write function that will populate array with first 10 members of fibonacci sequence
//     FibonacciSequence() should return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//     Use cycle for.
//
//  6) Write function which receive 2 arrays and returns array consisted of elements from both arrays
//     ordered in descending order. It is not allowed to use built in concat function
//     ConcatAndSort([3, 7, -9], [10, -57]) should return [10, 7, 3, -9, -57]
//
//  7) Write function which will check equality of arrays
//     IsArraysEqual([1, 2, 3], [1, 2, 3]) should return true
//     IsArraysEqual([1, 2, 3], [3, 2, 1]) should return false
//     IsArraysEqual([1, 2], [1, 2, 3, 4]) should return false
//
//  8)** Write function which will check does array A includes all elements from array B
//     IsArrayIncludesAllElements([1, 3, 6, 4, 7], [1, 6, 7]) should return true
//     IsArrayIncludesAllElements([1, 3, 6, 4, 7], [1, 6, 8]) should return false
//     IsArrayIncludesAllElements([1, 3, 6, 4, 7], [9, 15]) should return false
//
//     Please do not use built in IndexOf function
//
//  9)** Write function which will check does array A includes array B as a sequence
//     IsArrayIncludes([1, 3, 6, 4, 7], [3, 6, 4]) should return true
//     IsArrayIncludes([1, 3, 6, 4, 7], [15, 18, 4]) should return false
//     IsArrayIncludes([1, 3, 6, 4, 7], [6, 3, 1]) should return false
//     Please do not use built in IndexOf function
//
//  10) Rewrite 8 and 9 with use of IndexOf function
//







// 1) Write function that will change places of max and min element
// *     a) use built in functions max and min of array
// *     b) without use of built in functions. allowed to use only one cycle for
// *     ExchangeMinMax([1, 20, 3, 6, 19, -7, 3]) should return [1, -7, 3, 6, 19, 20, 3]

// var arr = [1, 20, 3, 6, 19, -7, 3];
//
// function ExchangeMinMax(arr) {
//   var tmp;
//   var n = arr.length;
//   var max = arr[0];
//   var min = arr[0];
//   for (var i = 1; i < n; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//       }
//       console.log(max);
//
//     if (min > arr[i]) {
//       min = arr[i]
//     }
//       console.log(min);
// }
// }
//
// console.log(ExchangeMinMax(arr));
//





//  2) Write function IndexOf which will return index of value in array
//     IndexOf(11, [17, 8, 9, 11, 3, 5]) should return 3
//     IndexOf(15, [17, 8, 9, 11, 3, 5]) should return -1
//

var arr = [17, 8, 9, 11, 3, 5];
var value = 11;
function IndexOf(value, arr) {
var n = arr.length;
   for (var i = 0; i < n; i++) {
    if (value == arr[i]) {
      return 1;
    } else {
      return -1
    }
  }

  }
console.log (IndexOf(11, [17, 8, 9, 11, 3, 5]));



//  3) Write function which will check does array is a palindrom
//     IsPalindrom([1, 2, 3, 2, 1]) should return true
//     IsPalindrom([1, 2, 3, 2, 7]) should return false






















//