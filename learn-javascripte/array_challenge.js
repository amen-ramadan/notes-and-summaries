// التحدي الموجود في الفيديو رقم 47




// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "gamal", "ameer"];



// المطلوب ارجاع الأوتبوت التالي بدون كتابة أي ارقام في الدوال المسعملة
// let day = my.slice(zero, ++counter).reverse();

// console.log(day);

// output : ['osama', 'Elham', 'Mazero', 'Ahmed']




// let day = my.slice(++zero, counter).reverse();
// console.log(day);   // ['Elham', 'Mazero']





// let EL = my[--counter].slice(zero, counter);
// let nano = my[++zero].slice(++zero);

// console.log(EL.concat(nano)); // => Elzero


// let nam_one = my[my.length - ++zero].slice(length - zero);  // => r
// let nam_two = my[my.length - counter].slice(--zero, ++zero); // => O

// console.log(nam_one.concat(nam_two));  // rO


/////////////////////////////////////////////////////

// التكليف 1 
// يجب عمل المطلوب واخراج الاوتبوت بدون استخدام الارقام 
// بطريقتين مختلفتين

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;


//myFriends.pop();
// Method 1
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


// myFriends.length = num;
// Method 2
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

////////////////////////////////////////////////////////


// التكليف الثاني 
// ممنوع استخدام الارقام 
// وممنوع استخدام slice method 



// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends = ["Eman", "Osama"]
// console.log(friends); //  =>  ["Eman", "Osama"]
///////////////////////////////////////////////////////

// التكليف الثالث 

// يجب كتابة سطر Code واحد فقط لتخرج القيمة المطلوبة

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// Write One Single Line Of Code
// finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();  // الحل


// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//////////////////////////////////////////////////////////


// التكليف الرابع :

// ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام الرقم 0 فقط
// يجب كتابة سطر Code واحد فقط لتخرج القيمة المطلوبة

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words.pop().shift().slice(website.length).toUpperCase()); // ZERO

/////////////////////////////////////////////////

// التكليف الخامس :

// كل ما عليك هو التأكد أن قيمة متغير needle موجود داخل ال Array المسماه haystack
// يجب عمل الحل بثلاث طرق مختلفة
// قم بطباعة كلمة Found في ال Console إذا كانت الكلمة موجودة

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// if (haystack.includes(needle) === true) {
//   console.log("found");
// }
// if (haystack.indexOf(needle) == true) {
//   console.log("found");
// }
// if (haystack.lastIndexOf(needle) == true) {
//   console.log("found");
// }

////////////////////////////////////////////////////////

// التكليف السادس :

// قم بكتابة Code فيه ما تعلمته لتخرج النتيجة الموجودة في المثال
// يمنع كتابة اي أرقام نهائيا في اي مكان في الحل

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = allArrs.concat(arr1, arr2).sort().slice(allArrs.length - arr1.length).join("").toLowerCase();

console.log(allArrs); // fxy