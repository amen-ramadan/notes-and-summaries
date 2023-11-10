
/* التكليف 01
قم بإنشاء Function بإسم getDetails تقبل منك ثلاثة Parameters وهم كالتالي zName, zAge, zCountry
ال Function ستحتوي على أربعة Functions فرعية بالأسماء التالية namePattern, ageWithMessage, countryTwoLetters, fullDetails
namePattern تقبل منك الإسم مكون من مقطعين هكذا Osama Mohamed وترجع الإسم هكذا Osama M. شاهد المثال لتفهم أكثر
ageWithMessage تقبل منك رسالة فيها العمر تستخرج منه فقط العمر وتقوم بتغيير الرسالة شاهد المثال لتفهم
countryTwoLetters تقبل منك إسم البلد وترجع لك رسالة معها أول حرفين من إسم البلد بحروف كبيرة شاهد المثال لتفهم
fullDetails تقوم بدمج جميع ال Functions السابقة لتخرج لك الرسالة كاملة كما في المثال
إسم الشخص الثاني أول حرف منه يمكن أن يكون Capital أو Small
رسالة العمر يمكن أن تتغير ولكن الرقم دائما سيكون في المقدمة ولن يتغير مكانه
التعليقات ستوضح لك المطلوب بالتفصيل

*/

/*
function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    let name = zName.split(' ');
    return `${name[0]}  ${name[1][0].toUpperCase()}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  namePattern()
  function ageWithMessage() {
    let age = parseInt(zAge);
    return `Your Age Is ${age}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  ageWithMessage()
  function countryTwoLetters() {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  countryTwoLetters()
  function fullDetails() {
    return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

*/


/*التكليف 02

قم بتحويل كل Function من ال Functions التالية ل Arrow Function Syntax
*/


/* 
// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function


// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;


console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

/*التكليف 03
تحدي
قم بتحويل ال Function التالية ل Arrow Function Syntax
إقرأ عن Currying Function Technique */

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

/*
let checker = (zName) =>
  (status) =>
    (salary) =>
      status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;


console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

 */

/*
التكليف 04
قم بإنشاء Function بإسم specialMix تقبل منك عدد غير معروف من ال Parameters
ال Function يمكن أن تقبل أرقام أو Strings أو Strings تحتوي على أرقام في بدايتها
إذا كانت جميع ال Arguments عبارة عن أرقام قم بجمعهم
إذا كانت Strings تحتوي على أرقام قم بإستخراج الارقام منهم وقم بجمعهم وطبعا تستثني أي String لا يحتوي على أرقام
إذا كانت جميع ال Arguments عبارة عن String تقوم بطباعة رسالة All Is Strings
شاهد المثال لترى ال Test Cases
*/

function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i])) === false) {
      result += parseInt(data[i]);
    }
  }
  if (result === 0) {
    return 'All Is Strings';
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings