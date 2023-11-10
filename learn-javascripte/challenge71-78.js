/*
التكليف 01
لديك متغير بإسم mix يحتوي على Letters And Numbers
قم بإنشاء Array جديدة بواسطة ال Map
يجب عليك إستثناء الأرقام نهائيا من النتيجة
يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
يجب إستعمال ال Map + Reduce مع ما تعلمته لتخرج بالناتج المطلوب
ممنوع إستخدام ال Join أو Filter
*/

/*
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let add = mix.map(function (el) {
  return isNaN(parseInt(el)) ? el : ''
}).reduce(function (acc, current) {
  return acc + current;
})

console.log(add);
// Elzero
*/

//////////////////////////////////////////////////////////

/*
التكليف 02
لديك متغير بإسم myString يحتوي على Letters منها المكرر ومنها العادي
قم بإنشاء Array جديدة بواسطة ال Filter
يجب عليك إستثناء ال Letters المكررة نهائيا من النتيجة
يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
*/


/*
let myString = "EElllzzzzzzzeroo";

let mix = myString.split("").filter(function (el, index) {
  return myString.indexOf(el) === index;
}).reduce(function (acc, current) {
  return acc + current;
})

console.log(mix);
// Elzero

*/

/*
التكليف 03
تحدي
لديك متغير بإسم myArray يحتوي على Array وبداخلها Array أخرى
قم بإنشاء Array جديدة بواسطة ال Reduce
يجب عليك عمل Flatten لل Array لترجع ب Array واحدة
يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
ممنوع إستخدام Array.flat() نهائيا
*/

/*
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function (acc, current) {
  return Array.isArray(current) ? acc + current.reduce(function (acc, curr) { return acc + curr }, '') : acc + current;
});

console.log(newArray);
// Output: "Elzero"
*/

/*
التكليف 04
لديك متغير بإسم numsAndStrings يحتوي على Letters And Numbers
قم بإنشاء Array جديدة بواسطة ال Filter + Map
يجب عليك إستثناء ال Letters من النتيجة
يجب عليك عكس الأرقام بمعنى الموجب يكون سالب والسالب يكون موجب
يجب عليك إستخدام ال Map + Filter + ما تريد
*/

/*
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNum = numsAndStrings.filter(function (el) {
  return !isNaN(parseInt(el));
}).map(function (el) {
  return -el
})

console.log(newNum);
// [-1, -10, 10, 20, -5, -3]

*/

/*
التكليف 05
تحدي
لديك متغير بإسم nums يحتوي على مجموعة أرقام زوجية وفردية
قم بإيجاد النتيجة النهائية المطلوبة بواسطة إستخدام ال Reduce فقط
يجب عليك تعيين ال Initial Value لل Reduce لرقم 1
إذا كانت قيمة ال Current Element في ال Reduce رقم فردي قم بجمع ال Accumulator مع ال Current Element
إذا كانت قيمة ال Current Element في ال Reduce رقم زوجي قم بضرب ال Accumulator مع ال Current Element
*/


/*
let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce(function (acc, curr) {
  return curr % 2 === 1 ? acc + curr : acc * curr;
}, 1);
console.log(newNums);
// 500

*/