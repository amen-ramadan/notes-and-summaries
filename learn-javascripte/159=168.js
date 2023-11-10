/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

// let dateNow = new Date();

// console.log(dateNow);

// console.log(Date.now()); // 1000 Mill = 1 Second

// let seconds = Date.now() / 1000; // Number Of Seconds
// console.log(`Seconds ${seconds}`);

// let minutes = seconds / 60; // Number Of Minutes
// console.log(`Minutes ${minutes}`);

// let hours = minutes / 60; // Number Of Hours
// console.log(`Hours ${hours}`);

// let days = hours / 24; // Number Of Days
// console.log(`Days ${days}`);

// let years = days / 365; // Number Of Years
// console.log(`Years ${years}`);

///////////////////////////////////////////////////////////////////////////////////////////

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

// let dateNow = new Date();
// let birthday = new Date("Oct 25, 82");
// let dateDiff = dateNow - birthday;

// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

// let dateNow = new Date();
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(0);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(10000);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setDate(7);
// console.log(dateNow);

// dateNow.setFullYear(2001, 8, 29);
// console.log(dateNow);

// dateNow.setMonth(15);
// console.log(dateNow);

///////////////////////////////////////////////////////////////////////////////////////////

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

// console.log(Date.parse("Oct 25 1982"));

// let date1 = new Date(0);
// console.log(date1);

// let date2 = new Date(404344800000);
// console.log(date2);

// let date3 = new Date("10-25-1982");
// console.log(date3);

// let date4 = new Date("1982-10-25");
// console.log(date4);

// let date5 = new Date("1982-10");
// console.log(date5);

// let date6 = new Date("82");
// console.log(date6);

// let date7 = new Date(1982, 9, 25, 2, 10, 0);
// console.log(date7);

// let date8 = new Date(1982, 9, 25);
// console.log(date8);

// let date9 = new Date("1982-10-25T06:10:00Z");
// console.log(date9);

//////////////////////////////////////////////////////////////////////////////////////

/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// // Start Time
// let start = new Date();

// // Operation
// for (let i = 0; i < 1000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);

///////////////////////////////////////////////////////////////////////////////////////\

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

// function* generateNumbers() {
//   yield 1;
//   console.log("Hello After Yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = generateNumbers();

// console.log(typeof generator);
// console.log(typeof generateNumbers());
// console.log(generator);

// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());

// for (let value of generateNumbers()) {
//   console.log(value);
// }

// for (let value of generator) {
//   console.log(value);
// }
// for (let value of generateNumbers()) {
//   console.log(value);
// }

// function* myGenerator() {
//   try {
//     // قسم من الكود
//     yield 'القيمة 1';

//     // قسم آخر من الكود
//     yield 'القيمة 2';
//   } catch (error) {
//     // التعامل مع الاستثناء هنا
//     console.error('حدث خطأ داخل generator:', error);
//   }
// }

// const generator1 = myGenerator();

// console.log(generator1.next().value); // يطبع 'القيمة 1'
// console.log(generator1.next().value); // يطبع 'القيمة 2'
// console.log(generator1.next().value); // يطبع 'القيمة 2'

// // رمي استثناء داخل generator1
// generator1.throw(new Error('هذا خطأ'));

// // سيتم طباعة الرسالة الخطأ من داخل catch في generator1

///////////////////////////////////////////////////////////////////////////////////////////////

/*
  Generators
  - Delegate Generator
*/

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Z"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

///////////////////////////////////////////////////////////////////////////////////////////////

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

// function* generateNumbers() {
//   // yield 1;
//   // yield 2;
//   // return "A";
//   // yield 3;
//   // yield 4;
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// let generator = generateNumbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//////////////////////////////////////////////////////////////////////////////////////////////

/* <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="main.css" />
    <title>Learn JavaScript</title>
  </head>
  <body>
    <script src="main.js" type="module"></script>
    <script src="app.js" type="module"></script>
  </body>
</html> */

/*
  Modules
  - Import And Export
*/

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a, arr, saySomething };
//////////////////////////////////////
// import { a, arr, saySomething as s } from "./main.js";

// console.log(a);
// console.log(arr);
// console.log(s());
///////////////////////////////////////////////////////////////////////////////////////

/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a as myNumber, arr, saySomething };

// export default function () {
//   return `Hello`;
// }
/////////////////////////
// import elzero, { myNumber, arr, saySomething as s } from "./main.js";

// console.log(myNumber);
// console.log(arr);
// console.log(s());
// console.log(elzero());

// import * as all from "./main.js";

// console.log(all);

// console.log(all.myNumber);
// console.log(all.arr);


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////challenge/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

/* التكليف 01
قم بطباعة الثواني والدقائق والساعات والأيام والشهور والسنين من تاريخ ميلادك بإستخدام الوقت
شاهد النتيجة بالأسفل لتعرف الفكرة المطلوبة
المطلوب طباعة القيم من تاريخ ميلادك أنت وليس النتيجة بالأسفل
*/

// let d = new Date();
// let birthday = new Date("1998 2 4");
// let n = Date.now();
// let re = n - birthday;
// console.log(birthday);
// console.log(re / 1000 / 60 / 60 / 24 / 365);




// // Needed Output

// // "1247939400 Seconds"
// // "20798990 Minutes"
// // "346650 Hours"
// // "14444 Days"
// // "481 Months"
// // "40 Years"

////////////////////////////////////////////////////////////////////////////////

/* التكليف 06
قم بإنشاء Generator Function تولد أرقام
تأكد أنها تطبع الأرقام بنفس ال Pattern كما في الأسفل
يجب ان تكون الأرقام إلى ما لا نهاية
*/

// // Write Your Generator Function Here
// function* gen() {
//   let index = 14;
//   let h = 140;
//   while (true) {
//     yield index
//     index += h;
//     h += 200;
//   }
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false} 140
// console.log(generator.next()); // {value: 494, done: false} 340
// console.log(generator.next()); // {value: 1034, done: false} 540
// console.log(generator.next()); // {value: 1774, done: false} 740
// console.log(generator.next()); // {value: 2714, done: false} 940
// console.log(generator.next()); // {value: 3854, done: false}1140
// console.log(generator.next()); // {value: 5194, done: false} 1340
// console.log(generator.next()); // {value: 6734, done: false} 1540

/* التكليف 07
لديك إثنين من ال Generators Function
المطلوب عمل Generator Function تقوم بعمل Delegate لباقي ال Generator Functions
يجب أن تستخدم ما تعلمته لتجعل ال Function الأخيرة تستثني القيم المكررة
شاهد ال Code لترى النتيجة لتفهم المطلوب */

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());

}


let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}