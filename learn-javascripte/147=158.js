
/*
  Constructor Function

function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// }; */

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Constructor Function
  - New Syntax
*/

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userOne instanceof User);
// console.log(userOne.constructor === User);

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Constructor Function
  - Deal With Properties And Methods
*/

// class User {
//   constructor(user, id, salary) {
//     //properties
//     this.u = user || "unknown";
//     this.i = id;
//     this.s = salary > 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `hello ${this.u} your salary is ${this.s}`
//     }
//   }
//   // methods
//   writeMsg() {
//     return `hello ${this.u} your salary is ${this.s}`
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.writeMsg());

// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userTwo.msg); // Native Code
// console.log(userTwo.writeMsg); // Native Code

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.u);
// userOne.updateName("Osama");
// console.log(userOne.u);

// let strOne = "Elzero";
// let strTwo = new String("Elzero");

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

/////////////////////////////////////////////////////////////////////////////////////////
/*
  Class
  - Static Properties And Methods
*/

// class User {
//   // Static Property
//   static count = 0;

//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }

//   // Static Methods
//   static sayHello() {
//     return `Hello From Class`;
//   }
//   static countMembers() {
//     return `${this.count} Members Created`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Ahmed", 5000);
// let userThree = new User(102, "Sayed", 5000);

// console.log(userOne.u);
// console.log(userTwo.u);
// console.log(userOne.count);
// console.log(User.count);
// console.log(User.sayHello());
// console.log(User.countMembers());

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Class
  - Inheritance
*/

// // Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// // Derived Class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }

// class Superman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.a = ability;
//   }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);

// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());

///////////////////////////////////////////////////////////////////////////////////////////////


/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
// */

// class User {
//   // Private Property
//   #e;
//   //  لازم يكون تعريف المتغيرات البرايفيت بهي المنطقة منشان يمشي الحال
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Prototype  مخطط

  عندةانشاء كلاس يتم انشاء بروتو تايب معه
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
// */

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);

// console.log(User.prototype);

// let strOne = "Elzero";

// console.log(String.prototype);

////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype);
// console.log(userOne);

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };

// Object.prototype.love = "Elzero Web School";

// String.prototype.addDotBeforeAndAfter = function () {
//   return `.${this}.`;
// };

// let myString = "Elzero";

///////////////////////////////////////////////////////////////////////////////////////

/*
  Object Meta Data And Descriptor
  - writable   ممكن تعيد كتابة قيمته او تكتب فوقها
  - enumerable  يعني اذا كان في لووب عم تمرق على عناصر الاوبجيكت هل من المسموح تعده او لا
  - configurable [Cannot Delete Or Reconfigure] هل هو قابل للتعديل والحذف او لا
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: false,
//   value: 3,
// });

// // Object.defineProperty(myObject, "c", {
// //   writable: false,
// //   enumerable: true,
// //   configurable: true, <= Cannot redefine property
// //   value: 3,
// // });

// myObject.c = 100;

// console.log(delete myObject.c);

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// console.log(myObject);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperties(myObject, {
//   c: {
//     configurable: true,
//     value: 3,
//   },
//   d: {
//     configurable: true,
//     value: 4,
//   },
//   e: {
//     configurable: true,
//     value: 5,
//   },
// });

// console.log(myObject);

// console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
// console.log(Object.getOwnPropertyDescriptors(myObject));

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////challenge/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


/* التكليف 01
لديك ال Constructor Function التالية والمطلوب تحويلها لل Class Syntax
لا تعتمد على البرنامج وقم بعملها بنفسك لتتأكد أنك تعرف ال Syntax
قم بإضافة إثنين Methods واحدة بإسم run وواحدة بإسم stop
كل واحدة فيهم تحتوي على رسالة
الأولى Car Is Running Now والثانية Car Is Stopped
قم بإنشاء ثلاث سيارات بواسطة هذا ال Class بأي بيانات تختارها
قم بطباعة بيانات أول سيارة منهم في ال Console بالطريقة الموجودة في الأسفل
في السطر الذي بعده قم بطباعة ال Method المسماه run
 */

// class Car {
//   constructor(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }
//   run() {
//     return `Car Is Running Now`
//   }
//   stop() {
//     return 'Car Is Running Now'
//   }
// }

// let carOne = new Car("mg", 2010, "مليون");

// console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);

// console.log(carOne.run());


// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

////////////////////////////////////////////////////////////////////////////////////////

/* التكليف 02
لدينا ال Class التالي بإسم Phone
نحتاج لعمل Class آخر بإسم Tablet يورث خواص Class ال Phone
ال Class الخاص بال Tablet يحتوي على Property زيادة وهي ال size
ويحتوي أيضا على Method بإسم fullDetails
قمنا بإستعمال ال Class المسمى Tablet لإنشاء أكثر من Tablet
قمنا بعدها بإستعمال ال Method المسماه fullDetails والتي تطبع بيانات عن ال Tablet
الآن كل ما عليك هو إنشاء ال Tablet Class لتظهر البيانات كما هو موجود في الأسفل
لو لم يكتب الشخص ال size يجب أن تظهر كلمة Unknown
 */

// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }

// // Write Tablet Class Here

// class Tablet extends Phone {
//   constructor(name, serial, price, size) {
//     super(name, serial, price); // super is used to call the parent class's constructor function and pass in its parameters as arguments for child class
//     this.s = size || "unknwon";
//   }
//   fullDetails() {
//     return (`${this.name} serial is ${this.serial} and size is ${this.s}`)
//   }
// }

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown


////////////////////////////////////////////////////////////////////////////////////////////////

/* التكليف 03
تحدي
لديك ال Class التالي بإسم User
نحتاج للتعديل عليه كما تريد لتنفيذ المطلوب بالأسفل
أولا منع الدخول على ال Card Property مباشرة
عند إنشاء مستخدمين تلاحظ كل شخص كتب ال Card Number بطريقة مختلفة
نحتاج جميع الأرقام أن تكون String وبعد كل 4 أرقام علامة – كما في ال Output
يجب عدم التعديل على أسطر إنشاء المستخدمين ولا أسطر ال Console */



// // Edit The Class
// class User {
//   #c;
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card.toString().replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1-$2-$3-$4');
//   }
//   get showData() {
//     return `hello ${this.u} your credit card number is ${this.#c}`
//   }
// }

// // Do Not Edit Anything Below

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined

//////////////////////////////////////////////////////////////////////////////////////////////

/* التكليف 04
لديك ال String التالي
قمنا بعدها بإستخدام Method بإسم addLove
ظهرت لنا النتيجة كما في ال Output بالأسفل
ماذا تحتاج لتكتب لتعمل هذه ال Method وتظهر النتيجة المطلوبة */

// // Write Your Code Here
// String.prototype.addLove = function () { return `i love ${this} wed school` }

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School

/////////////////////////////////////////////////////////////////////////////////////////////////


/* التكليف 05
لدينا ال Object التالي
بعده هناك سطر يقوم بتغيير قيمة ال Score
بعده هناك Loop يطبع محتوى ال Object كاملة إسم ال Property وبجانبها القيمة
بعده يتم طباعة محتوى ال Object في ال Console
ممنوع التعديل على محتوى ال Object ولا ال Loop ولا سطر الطباعة في ال Console
في المكان المخصص يجب عليك كتابة ال Code لعمل المطلوب
مطلوب عدم السماح بتغيير قيمة ال score
مطلوب عدم إظهار ال id داخل ال Loop ولكن يظهر بدون اي مشكلة في محتوى ال Object في ال Console
مطلوب عدم ظهور ال Country في ال Loop ولا في محتوى ال Object في ال Console
 */

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },
  country: {
    writable: false,
    enumerable: false,
    configurable: true,
  }
})
delete myObj.country;


myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}