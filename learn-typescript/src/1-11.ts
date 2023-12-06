// watch and configuration

// command line
// tsc index.ts
// tsc -h
// tsc -w index.ts
// tsc --init

// الخيارات التي تم التعديل عليها 

// "rootDir": "./src"
// "sourceMap": true
// "outDir": "./dist"
// "removeComments": true

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/

// let theName = "Elzero";
// let theAge: number = 40;
// let hire: boolean = true;
// let all: any = "Elzero Web School";
// let allVars; // Any

// theName = "Osama";
// all = 100;

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// console.log(add(10, 20));
// console.log(typeof add(10, 20));

// function add(n1, n2) {
//   return n1 + n2;
// }

// console.log(add(10, "20"));
// console.log(typeof add(10, "20"));

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


/*
  Type Annotations With Arrays
*/

// let all: string | number | boolean = "Osama";

// all = "A";
// all = 100;
// all = true;

// let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i].repeat(3));
// }

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/*
  Type Annotations With Multidimensional Arrays
*/

// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ["A", "B", "C"];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

// let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/

// let showMsg = true;

// function showDetails(name: string, age: number, salary: number) : string {
//   let test = 10;
//   if (showMsg) {
//     return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
//   }
//   return `No Data To Show`;
// }

// console.log(showDetails("Osama", 40, 5000));

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

// function showData(name?: string, age?: number, country?: string) {
//   return `${name} - ${age} - ${country}`;
// }

// console.log(showData("Osama", 40, "Egypt"));

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

// function addAll(...nums: number[]) : number {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result += nums[i];
//   }
//   // nums.forEach((num) => result += num);
//   return result;
// }

// console.log(addAll(10, 20, 30, 100, 10.5, +true));


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/*
  Function
  - Anonymous Function
  - Arrow Function
*/

// const add = function(num1: number, num2: number) : number {
//   return num1 + num2;
// }

// console.log(add(10, 20));

// const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

// console.log(addWithArrow(10, 20));

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// التكليف 02
// لدينا ال Function التالية تقبل منك إثنين Parameters وهم الأرقام
// ال Type الخاص بالبيانات تم إستنتاجه على أنه Any
// السطر الثاني الذي يحتوي على “10”, “20” سوف يعمل بدون اي مشكلة لكننا نريد ألا يعمل
// ال Function الخاصة بنا تتعامل فقط مع الأرقام

// function calculate(numOne: number, numTwo: number) {
//   return numOne + numTwo;
// }

// console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
// console.log(calculate(+true, +true)); // 2


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// التكليف 03
// لدينا ال Function التالية تقبل منك إثنين Parameters وهم قيم منوعة
// نريد طباعة رسالة فيها القيمة الأولى والثانية
// السطر الأخير لا نريده أن يعمل لأننا نحتاج قيم ال Number + String فقط
// يجب عدم إستعمال Any Type


// function printInfo(valueOne: string | number | boolean, valueTwo: string | number| boolean) {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }

// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work



//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


// التكليف 04
// لدينا ال Array التالية ومحدد فيها ال Type Annotations
// المطلوب تحديث قيمة ال Array وإضافة أي بيانات عشوائية فيها بدون ظهور اي أخطاء


// let arr: (number | boolean[] | (string | (string | number)[])[])[];

// arr= [5, [true, false], ["jon",["jad", 90]]];

// console.log (arr);


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// التكليف 05
// لدينا ال Function التالية
// نحتاج لتعديل ملف ال Config حتى نحقق المطلوب
// ال username هنا يوجد به خطأ لأن ال Compiler إستنتج أن نوع البيانات Any ونحن نحتاج لتخطي هذا الخطأ
// لدينا متغير بإسم rank غير مستخدم ونحتاج لإظهار خطأ ينبهنا
// لدينا Parameter بإسم age غير مستخدم ونحتاج لإظهار خطأ ينبهنا
// لدينا سطر في ال Console لن يعمل ونريد أن ينبهنا على هذا الخطأ


// function reportErrors(username, age: number) {
//   let rank = "Professor";
//   return `Username: ${username}`;
//   console.log("We Will Not Reach Here");
// }

// console.log(reportErrors("Elzero", 40));


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


// التكليف 06
// لدينا ال Function التالية
// إستخدم المتغيرات المتاحة مكان علامات الإستفهام لتخرج بالنتيجة المطلوبة
// ممنوع كتابة أي شيء خارج المتغيرات المتاحة


// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c: string) {
//   return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(nothing,nothing,theName)); // Elzero


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


// التكليف 07
// لدينا ال Function التالية
// قم بإصلاح ال Function حتى تعمل جميع الأمثلة الموجودة بالأسفل بدون أي مشكلة
// ممنوع إستخدام ال Default Parameter Value


// function showMsg(user?: string, age?: number | string, country?: string) {
//   return `${user}${age}${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// التكليف 08
// قمنا بإستخدام ال Function التالية ولدينا أكثر من مثال
// ال Arguments غير معروف عددها ويمكن أن تزيد أو تنقص
// قم بكتابة ال Function التي تقوم بطباعة جميع العناصر وبجانبها نوعها. شاهد المثال لترى المطلوب


// Write The Function Here
function printInConsole(...a:any) {
  for (let i=0 ;i< a.length ; i++){
    console.log(`the Value Is ${a[i]} And Type Is ${typeof a[i]}`)
  }
  return `done`;
}


// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done







