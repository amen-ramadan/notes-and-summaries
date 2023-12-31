/*
- Set Data Type
Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
  */

/*
let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);
 */

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


/*
- Set vs WeakSet
"
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
    "
    --
    Set     => Can Store Any Data Values
    WeakSet => Collection Of Objects Only
    --
    Set     => Have Size Property
    WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
  */

// Type Of Data

/*
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);
 */
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

/*

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  "10": "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() { }, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

 */

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"],
// ]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");
/*
console.log(myMap);

console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("####");

console.log(myMap.has("Name"));

console.log("####");

console.log(myMap.size);

console.log(myMap.delete("Name"));

console.log(myMap.size);

myMap.clear();

console.log(myMap.size);
 */

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/
/*

let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);
*/

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/
/*
console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);

console.log(Array.from(mySet));

console.log([...new Set(myArray)]); // Future

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

 */
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  --- بتحافظ على عدد عناصر المصفوفة
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target هي المكان الذي سوف تنسخ اليه يعني بالستارت والاند بتحدد المنسوخ وبالتارغت بتقلو وين يحطن
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Omitted = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Omitted = Reach The End
*/

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

// myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

// console.log(myArray);

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/
/*
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let check = nums.some(function (e) {
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange); */

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/
/*
const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((n) => +n);

console.log(locationArrayNumbers);

let check = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String
/*
console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

 */

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/


// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// //Math.round(...n2)    30
// console.log(Math.round(...n2) * [...n1, ...n2].length); // 210

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////   CHALLENGE    ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
التكليف 01
قم بإنشاء Set جديدة بإسم setOfNumbers
قم بإضافة رقم 10 لل Set أثناء الإنشاء
قم بإضافة رقم 20 لل Set في سطر منفصل
في نفس السطر السابق قم بإضافة عنصر جديد وهو عبارة عن عدد عناصر ال Set السابقة
قم بطباعة ال Set في ال Console وتأكد أنها مطابقة للمثال التالي
في سطر واحد فقط منفصل إستخدم ما تعلمته لتطبع آخر عنصر موجود في ال Set
 */


// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(setOfNumbers.size);

// console.log(setOfNumbers);  //Set(3) {10, 20, 2}
// console.log([...setOfNumbers][2]);   //2
/////////////////////////////////////////////////////////////////////////

/* التكليف 02
لديك Array تحتوي على اسماء أصدقائك وهناك منهم أسماء مكررة
المطلوب طباعة الأسماء في ال Console مرتبين أبجديا وبدون تكرار
المطلوب عمل الحل بسطر واحد فقط
*/

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log([...new Set(myFriends)].sort());   // my answer
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

///////////////////////////////////////////////////////////////////////////////////////

/* التكليف 03
لديك Object يحتوي على بياناتك
المطلوب إستخدام ما تعلمته لتحويل ال Object ل Map
المطلوب في السطر الأول طباعة محتوى ال Map
في السطر الثاني تقوم بطباعة عدد عناصر ال Map
في السطر الأخير تقوم بفحص هل ال Map تحتوي على عنصر بإسم role أم لا
*/

// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };


// let k = Object.keys(myInfo);

// let m = new Map([
//   [k[0], myInfo.username],
//   [k[1], myInfo.role],
//   [k[2], myInfo.country],
// ]);


// console.log(m);
// console.log(m.size);
// console.log(m.has("role"));



// Needed Output
// Map(3) { 'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt' }
// 3
// true

////////////////////////////////////////////////////////////////////////////////////

/* التكليف 04
لديك الرقم التالي 100020003000
المطلوب إستخدام ال Spread Operator + Set مع ما تعلمته لتخرج برقم 123
الحل يجب أن يكون في سطر واحد فقط
ممنوع إستخدام أي ارقام نهائيا
الناتج النهائي 123 يجب أن يكون Number وليس String */

// let theNumber = 100020003000;

// console.log(Number([...new Set([...theNumber.toString().split("0")])].join('')));

// Needed Output
//123
///////////////////////////////////////////////////////////////////////////////////
/*
التكليف 05
لديك متغير يحتوي على إسم Elzero
المطلوب تحويل ال String ل Array بخمس طرق مختلفة
شاهد المثال
// */

// let theName = "Elzero";


// console.log([...theName]);
// console.log(theName.split(""));
// console.log(new Array(...theName));
// console.log(Array.from(theName));
// console.log(Array.from(theName).copyWithin()); // هي غلط بس مالها طعمة فيني ساوي لوب على السترينغ وانشئ مصفوفة ضيف الاحرف فيها حرف حرف
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

////////////////////////////////////////////////////////////////////////////////////

/*
التكليف 06
تحدي
لديك Array تحتوي على مجموعة من الأرقام والحروف
على حسب عدد الأرقام الموجودة في ال Array سنقوم بإستبدالها بأول أحرف
الأحرف يمكن أن تتغير فلا تعتمد عليها
بغض النظر عن مكان الأرقام يجب عليك جعلها دائما تأتي في بداية ال Array
عدد الأرقام يمكن أن يتغير لذلك الحل الخاص بك يجب أن يعمل على أي Array
شاهد كل مثال وال Output الخاص به
شاهد في النهاية شرح للفكرة حتى تصل لك بشكل كامل
*/

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];


// console.log(chars.sort().copyWithin(0, -5, -2));

// Needed Output
//['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
///////////////////////////

//let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

//console.log(chars.sort().copyWithin(0, -5, -1));
// Needed Output
//['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
///////////////////////////

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];


// console.log(chars.sort().copyWithin(0, -1).copyWithin(1, -2, -1).copyWithin(4, 2, 5).copyWithin(2, 0, 2));
// Needed Output
//["Z", "Y", "Z", "Y", "A", "D", "E"]

/////////////////////////////////////////////////////////////////

/*

التكليف 07
لديك Arrays تحتاج لعمل دمج لها
المطلوب دمج ال Arrays بثلاث طرق مختلفة
*/

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// console.log(numsOne.concat(numsTwo));
// console.log([...numsOne, ...numsTwo]);
// Array.prototype.push.apply(numsOne, numsTwo);
// console.log(numsOne);
// Needed Output
//[1, 2, 3, 4, 5, 6]

//////////////////////////////////////////////////////////////////////



