// // التكليف 01
// // لديك إسم ملف يحتوي على الإسم والإمتداد
// // في السطر الأول وبسطر واحد نريد طباعة إسم الملف بدون الإمتداد
// // في السطر الثاني وبسطر واحد نريد طباعة إسم الإمتداد فقط
// // إسم الملف يمكن أن يتغير وعدد الأحرف غير ثابت

// let fileName = "Elzero.php";

// // الحل
// console.log(fileName.slice(0, fileName.indexOf(".")))
// console.log(fileName.slice(fileName.indexOf(".")))

// // Elzero
// // php

////////////////////////////////////////////////
////////////////////////////////////////////////

// التكليف 02
// قم بعمل Function بإسم addEl تقبل منك Parameter واحد وهو ال String المطلوب التعامل معه
// إذا كان ال String فارغ يرجع كما هو
// إذا كان أول حرفين من ال String هم “El” قم بإرجاع ال String كما هو
// أي شيء غير ذلك قم بإرجاع ال String بعد إضافة “El” في بدايته
// شاهد الأمثلة وال Test Cases

// function addEl(str) {
//   // Your Code Here
//   if (str === "" || null) {
//     return "";
//   }
//   else if (str[0] + str[1] === "El") {
//     return str;
//   }
//   else {
//     return "El" + str;
//   }
// }
///////////////////
// console.log(addEl("")); // ""
// console.log(addEl("Elzero")); // Elzero
// console.log(addEl("zero")); // Elzero

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 03
// // لدينا ال String التالي يحتوي على علامة @ أكثر من مرة
// // المطلوب إزالة كل شيء بعد علامة @ الثانية بسطر واحد فقط
// // شاهد النتيجة المطلوبة

// let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";

// console.log(myString.slice(0, myString.indexOf("@", myString.indexOf("@") + 1)));

// // Output Needed
// //"Hello Elzero Web School @ We Love Programming"

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 04
// // لديك Function بإسم checkRange تقبل منك خمس Parameters وكلهم عبارة عن أرقام
// // أول 3 أرقام هي الأرقام التي نريد أن نفحص إذا كانت من ضمن Range معين أم لا
// // ال Range يبدأ من الرقم الرابع والرقم الخامس
// // مثلا لو لدينا الخمس أرقام التالية 2, 4, 6, 1, 10
// // نريد هنا أن نعرف هل رقم 2 و 4 و 6 موجودين داخل ال Range الذي يبدأ من 1 وينتهي عند ال 10
// // شاهد الأمثلة لتعرف الرسالة المطلوبة في كل حالة
// // يجب أن لا تستعمل أي نوع من أنواع ال Loop

// function checkRange(n1, n2, n3, n4, n5) {
//   // Your Code Here
//   if (n1 && n2 && n3 > n4 && n1 && n2 && n3 < n5) {
//     return "Yes All Numbers In Range";
//   }
//   else {
//     return "No Some Number Out Of The Range";
//   }
// }

// console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
// console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
// console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 05
// // لديك Function تقبل منك Parameter واحد وهو ال String والذي يحتوي على كلمة واحدة
// // نريد أن نستبدل أول حرف من الكلمة بآخر حرف فقط
// // شاهد الأمثلة لتعرف المطلوب

// function replaceFirstWithLast(word) {
//   // Your Code Here

//   return word[word.length - 1] + word.slice(1, -1) + word[0];
// }9

// console.log(replaceFirstWithLast("olzerE")); // Elzero
// console.log(replaceFirstWithLast("Hello")); // oelloH

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 06
// // لديك Function تقبل منك Parameter واحد وهو String يحتوي بداخله على مجموعة أرقام
// // المطلوب إرجاع أكبر رقم في هذه الارقام
// // يجب عمل المطلوب بسطر واحد فقط داخل ال Function


// function checkBiggestNum(word) {
//   // Your Line Of Code Here
//   return Math.max(...word);
// }

// console.log(checkBiggestNum("1500654")); // 6
// console.log(checkBiggestNum("8509507")); // 9

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 07
// // لديك Array تحتوي على مجموعة من الأرقام
// // نحتاج لإرجاع Array تحتوي على أكبر رقمين في ال Array
// // ممنوع إستخدام ال Loop

// let nums = [20, 100, 50, 10, 15, -20, 30];


// function findTwoLargestNumbers(arr) {
//   let sortedArray = arr.slice().sort((a, b) => b - a);
//   return sortedArray.slice(0, 2);
// }

// console.log(findTwoLargestNumbers(nums)); // [100, 50]

// // Needed Output
// // [100, 50]
////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 08
// // لديك Array تحتوي على مجموعة من الأرقام ولديك أيضا رقم سنعتبره هو الهدف
// // نريد أن نعرف أقرب رقم في عناصر ال Array للرقم الذي نعتبره الهدف
// // شاهد المثال لتعرف الفكرة

// let nums = [10, 80, 85, 25, 30, 88, 15];
// let goal = 100;

// // Your Code Here

// function targetGoal(arr) {
//   let result = goal - arr[0];
//   let goal_2;
//   for (i = 0; i < arr.length; i++) {
//     if (result > goal - arr[i]) {
//       result = goal - arr[i];
//       goal_2 = arr[i];
//     }
//   }
//   return goal_2;
// }

// console.log(targetGoal(nums))

// console.log("##############################################");

// let closestNumber = nums.reduce(function (prev, curr) {
//   return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
// });

// console.log(closestNumber);


// // Closest Number Is 88

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 09
// // لديك Function تقبل منك Parameter واحد وهو ال String ويحتوي على كلمة واحدة
// // نحتاج أن نقوم بعمل Swap Cases بمعنى الحرف الكبير يكون صغير والعكس
// // ولكن هذه المرة نريد أن نقوم بتحويل حرف ونترك الذي بعده وهكذا
// // للتوضيح أول حرف لو كان كبير نقوم بتحويله لحرف صغير والعكس اما ثاني حرف نتركه كما هو ثم نقوم بتحويل الثالث ونترك الرابع وهكذا
// // شاهد الأمثلة لتفهم الفكرة

// function swapEveryTwoChars(word) {
//   // Your Code Here
//   const re = word.split("");
//   for (let i = 0; i < re.length; i++) {
//     if (i % 2 == 0) {
//       if (re[i] === re[i].toUpperCase()) {
//         re[i] = re[i].toLowerCase();
//       }
//       else {
//         re[i] = re[i].toUpperCase();
//       }
//     }
//   }
//   return re.join("")
// }


// console.log(swapEveryTwoChars("elZeRo")); // Elzero
// console.log(swapEveryTwoChars("heLlO")); // Hello

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 10
// // لدينا Function بإسم Repeat في اللغة تقوم بعمل تكرار للنصوص
// // نريد عمل Function تقوم بنفس الوظيفة بإسم elzeroRepeat
// // شاهد المثال والنتيجة وقم بعمل ال Function وإضافتها لل String Functions



// // Write Your Function Implementation Here
// String.prototype.elzeroRepeat = function (n) {
//   let repeatedString = "";
//   for (let i = 1; i <= n; i++) {
//     repeatedString += this;
//   }
//   return repeatedString;
// }
// console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 11
// // لديك متغير يحتوي على رقم وهو الأموال التي ستحصل عليها في المستقبل بإذن الله
// // نريد عمل Format للرقم لنضع فاصلة بين كل 3 أرقام
// // شاهد المثال لتفهم الفكرة

// let myMoney = 5301503206;

// let formattedNumber = myMoney.toLocaleString();

// console.log(formattedNumber);



// // Needed Output
// // 5,301,503,206

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 12
// // لديك Array تحتوي على مجموعة من ال Strings
// // المطلوب إرجاع ال Array تحتوي على الكلمات التي بها أول حرف يساوي آخر حرف
// // لن تفرق إذا كان حرف كبير أم صغير المهم يكون أول حرف يساوي آخر حرف
// // شاهد المثال لتعرف المطلوب




// let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
// let result = [];

// // Your Code Here


// result = names.filter(function (el) {
//   return el[0].toLowerCase() === el[3].toLowerCase();
// })

// console.log("#############################################");

// for (i = 0; i < names.length; i++) {
//   if (names[i][0].toLowerCase() === names[i][3].toLowerCase()) {
//     result.push(names[i]);
//   }
// }

// console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 13
// // لديك String يحتوي على كلمة واحدة
// // في أول سطر نريد طباعة أول حرف وبجانبه آخر حرف
// // في السطر الثاني نريد طباعة الأحرف في الوسط بدون أول حرف ولا آخر حرف
// // في السطر الثالث نريد طباعة الحرفين الموجودين في نصف الكلمة


// let theName = "Elzero";

// function getN(st) {
//   return `Line 1 => ${st[0]}${st[st.length - 1]}
// Line 2 => ${st[1]}${st[2]}${st[3]}${st[4]}
// Line 3 => ${st[2]}${st[3]}`;
// }

// console.log("#############################################");


// function getN(st) {
//   let result = '';
//   for (let i = 0; i < 3; i++) {
//     if (i === 0) {
//       result += `Line ${i + 1} => ${st[0]}${st[st.length - 1]}\n`;
//     } else if (i === 1) {
//       result += `Line ${i + 1} => ${st.slice(1, 5)}\n`;
//     } else {
//       result += `Line ${i + 1} => ${st.slice(2, 4)}\n`;
//     }
//   }
//   return result;
// }


// console.log(getN(theName));
// // Line 1 => Eo
// // Line 2 => lzer
// // Line 3 => ze

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 14
// // لديك Function تقبل منك Parameter واحد وهو String يحتوي على كلمة واحدة
// // المطلوب المرور على كل حرف وعمل التالي
// // عدم تكرار أول حرف
// // تكرار ثاني حرف مرة واحدة
// // تكرار ثالث حرف مرتين
// // تكرار رابع حرف ثلاث مرات وهكذا كلما زادت الحروف في الكلمة
// // شاهد الأمثلة لتفهم الفكرة


// function repeatWithRules(word) {
//   // Your Code Here
//   let result = [];
//   for (let i = 0; i < word.length; i++) {
//     result.push(word[i].repeat(i + 1));
//   }
//   return result.join("");
// }

// console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
// console.log(repeatWithRules("Hello")); // Heelllllllooooo

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 15
// // لديك Function تقبل منك Parameter واحد وهو عبارة عن Array تحتوي على مجموعة من ال Strings
// // نريد ربط جميع الكلمات مع بعضها ولكن نستثني آخر حرف من كل كلمة
// // نريد وضع مسافة بين الكلمات
// // شاهد المثال لتفهم الفكرة


// function concatenateWithoutLast(words) {
//   // Your Code Here
//   let word = words.map(el => {
//     return el = el.split("").slice(0, el.length - 1).join('')
//   });
//   return word.join(" ");
// }

// console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 16
// // لديك Function تقبل منك Two Parameters عبارة عن String و Number
// // ال String هو النص الذي سنتعامل معه
// // المطلوب جلب عدد الحروف من أول ومن آخر ال String حسب الرقم المكتوب
// // إذا كان الرقم مثلا 2 فعلينا جلب اول حرفين وآخر حرفين من النص وربطهم ببعض
// // شاهد المثال لترى الفكرة


// function getCharacters(word, nums) {
//   // Your Code Here
//   let re = word.slice(0, nums) + word.slice(-nums);;
//   return re;
// }

// console.log(getCharacters("Elzero School", 2)); // Elol
// console.log(getCharacters("Elzero School", 3)); // Elzool

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 17
// // لديك Function تقبل منك Parameter واحد وهو عبارة عن نص
// // المطلوب جلب أول حرف من كل كلمة وربطهم سويا
// // يجب وضع نقطة بين كل حرف والآخر ولا يجب وضع نقطة بعد آخر حرف
// // أول حرف فقط يكون حرف كبير والباقي لا
// // شاهد المثال لتفهم الفكرة


// function formatName(theName) {
//   let result = theName.split(" ").map(function (el, index) {
//     return index === 0 ? el.charAt(0).toUpperCase() : el.charAt(0).toLowerCase();
//   });
//   return result.join(".");
// }

// console.log(formatName("Osama Elzero")); // O.e
// console.log(formatName("Elzero Web School")); // E.w.s

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 18
// // لديك String يحتوي على كلمة واحدة
// // نريد أن نقوم بتحويل أول حرف من الكلمة لحرف كبير “Capital Letter”
// // المطلوب عمل ذلك بسبع طرق مختلفة وكل طريقة في سطر واحد
// // يمكنك تنويع الطرق وإستخدام كل ما تعلمته


// let st = "elzero";

// console.log(st.charAt(0).toUpperCase() + st[1] + st[2] + st[3] + st[4] + st[5]);
// console.log(st.slice(0, -5).toUpperCase() + st.slice(1));
// console.log(st[0].toUpperCase() + st.substring(1, 6));
// console.log(st.substr(0, 1).toUpperCase() + st.replace("elzero", "lzero"));
// console.log("#####################################")
// console.log(st.charAt(0).toUpperCase() + st.slice(1));
// console.log(st.replace(st.charAt(0), st.charAt(0).toUpperCase()));
// console.log(st.charAt(0).toUpperCase() + st.substring(1));
// console.log(st.slice(0, 1).toUpperCase() + st.slice(1));
// console.log(st.replace(/^\w/, (c) => c.toUpperCase()));
// console.log(st.split('').map((c, i) => i === 0 ? c.toUpperCase() : c).join(''));
// console.log(String.fromCharCode(st.charCodeAt(0) - 32) + st.slice(1));

// // Output Needed
// // "Elzero"
// // "Elzero"
// // "Elzero"
// // "Elzero"
// // "Elzero"
// // "Elzero"
// // "Elzero"


////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 19
// // لديك String يحتوي على نص ونريد ترتيب النص
// // يجب ترتيب النص بواسطة ال Slice فقط
// // يجب كتابة أرقام سالبة فقط داخل ال Slice لعمل المطلوب
// // شاهد المثال لترى الفكرة

// let st = "Web SchoolElzero ";

// console.log(st.slice(-7) + st.slice(0, -7));

// // Needed Output
// // "Elzero Web School"

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 20
// // لديك String يحتوي على نص
// // نريد جلب آخر Character في ال String
// // يجب عمل المطلوب ب 7 طرق مختلفة وكل طريقة في سطر واحد فقط

// let st = "Elzero";

// console.log(st.slice(-1))
// console.log(st.substring(st.length - 1))
// console.log(st.substr(st.length - 1))
// console.log(st.charAt(st.length - 1))
// console.log(st[5])
// console.log(String.fromCharCode(st.charCodeAt(5) - 32))
// console.log((/o\b/))
// console.log((st.length - 1))
// // Needed Output
// // "o"
// // "o"
// // "o"
// // "o"
// // "o"
// // "o"
// // "o"

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 21
// // لديك ال Function التالية تقبل منك Parameter واحد وهو الرقم
// // نحتاج لأن نجلب آخر Digit موجود في الرقم
// // شاهد المثال لتفهم الفكرة
// // يجب التأكد أن نوع البيانات النهائي هو Number

// function getLastDigit(num) {
//   // Your Code Here
//   num = num.toString().split("");
//   return parseInt(num[num.length - 1])
// }

// console.log(getLastDigit(1)); // 1
// console.log(getLastDigit(18)); // 8
// console.log(getLastDigit(305)); // 5
// console.log(getLastDigit(1569)); // 9
// console.log(typeof getLastDigit(1569)); // Number


////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 22
// // لديك عدد Two Strings
// // المطلوب ربطهم ببعضهم مع إستثناء ال Character الأول من كل String
// // قم طباعة النتيجة داخل ال Console
// // يمنع كتابة المسافة بنفسك وإستخدم ما تعلمته لتظهر المسافة بين ال Two Strings

// let str1 = "AElzero";
// let str2 = "ZAcademy";

// console.log(`${str1.slice(1)} ${str2.slice(1)}`); // Elzero Academy

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 23
// // لدينا Function تقبل Parameter واحد وهو عبارة عن String
// // نريد عكس حروف كل كلمة فقط بدون تغيير مكان العلامات , و @
// // شاهد المثال لتفهم الفكرة

// function reversing(str) {
//   // Write Your Code Here
//   let words = str.split(', ');
//   for (let i = 0; i < words.length; i++) {
//     st1 = words[i].slice(0, words[i].indexOf('@') + 1);
//     st2 = words[i].slice(words[i].lastIndexOf('@') + 1).split('').reverse().join("");
//     words[i] = `${st1}${st2}`;
//     // console.log(words[i])
//   }
//   return words.join(", ");
// }

// console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl

////////////////////////////////////////////////
////////////////////////////////////////////////


// التكليف 24
// لديك Function تقبل منك Parameter واحد وهو عبارة عن رقم
// المطلوب وضع علامة “-” بين كل رقمين فرديين فقط
// 35 تضغ بينهم علامة “-” لأنهم أرقام فردية أما 32 ليسوا كلهم أرقام فردية لذلك لا تضع
// شاهد المثال لتفهم الفكرة والمطلوب

// function dashBetweenOdd(num) {
//   // Write Your Code Here
//   let arr = num.toString().split("").reduce(function (a, c) {
//     console.log(a, c)
//     return (+a % 2 !== 0 && +c % 2 !== 0) ? a + `-${c}` : a + c;
//   });
//   return arr;
// }

// console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
// console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922

// console.log("#########################################")

// function dashBetweenOdd(num) {
//   let numString = num.toString(); // تحويل الرقم إلى نص

//   let result = numString.split('').reduce((a, c, index) => {
//     console.log(a, "#", c, "#", index)
//     if (index > 0) {
//       let currentDigit = +c; // الرقم الحالي
//       let previousDigit = +numString[index - 1]; // الرقم السابق

//       console.log(currentDigit, previousDigit)
//       if (currentDigit % 2 !== 0 && previousDigit % 2 !== 0) {
//         return a + `-${c}`; // إذا كان كلا الرقمين فرديين، ضع فاصلة والرقم الحالي
//       }
//     }

//     return a + c; // إضافة الرقم بدون فاصلة إذا لم يكن كلاهما فرديين
//   });

//   return result;
// }

// console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
// console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922


// console.log("#########################################")

// function dashBetweenOdd(num) {
//   let numString = num.toString(); // تحويل الرقم إلى نص
//   let result = numString[0]; // تخزين الرقم الأول في الناتج

//   for (let i = 1; i < numString.length; i++) {
//     let currentDigit = +numString[i]; // الرقم الحالي
//     let previousDigit = +numString[i - 1]; // الرقم السابق

//     if (currentDigit % 2 !== 0 && previousDigit % 2 !== 0) {
//       result += `-${currentDigit}`; // إذا كان كلا الرقمين فرديين، ضع فاصلة والرقم الحالي
//     } else {
//       result += currentDigit; // إضافة الرقم الحالي دون فاصلة إذا لم يكن كلاهما فرديين
//     }
//   }

//   return result;
// }

// console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
// console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922


////////////////////////////////////////////////
////////////////////////////////////////////////

// التكليف 25
// لديك Array تحتوي على بعض العناصر
// نريد تفريغ ال Array من العناصر
// مطلوب عمل ذلك ب 4 طرق مختلفة
// شاهد المثال لتفهم الفكرة

// let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// myArr = [];


// for (let i = 0; i <= myArr.length; i++) {
//   myArr.shift()
//   myArr.pop()
// }

// myArr.length = 0;

// myArr.splice(0);

// while (myArr.length) {
//   myArr.pop();
// }


// console.log(myArr)
// Output Needed
// []

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 26
// // لدينا Array تحتوي على مجموعة من العناصر وفيهم بعض العناصر المكررة
// // المطلوب إزالة العناصر المكررة ب 4 طرق مختلفة بدون تكرار أي Method
// // شاهد المثال لتفهم الفكرة


// // let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];

// function deleteItem(array) {
// // method 1
// // let array1 = array.filter((value, index, self) => { return self.indexOf(value) === index })
// // return array1;

// // method 2
// // let array2 = [];
// // for (let i = 0; i < array.length; i++) {
// //   if (array2.includes(array[i]) === false) {
// //     array2.push(array[i]);
// //   }
// // }
// // return array2;

// // method 3
// // return Array.from(new Set(array));

// // method 4
// const map = new Map();
// array.forEach(item => map.set(item, null));
// return Array.from(map.keys());

// }

// console.log(deleteItem(myArr));

// // Output Needed
// // [10, 20, 30, 50]

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 27
// // لديك Array تحتوي على مجموعة من ال Strings وداخلها أرقام
// // المطلوب إستخدام ما تعلمته لتطبع كلمة Elzero كما في المثال
// // ممنوع كتابة أي أرقام ولا حروف ولا أي شيء من عندك
// // كل ما عليك إستخدام عناصر ال Array فقط لتخرج بالمطلوب

// let myArr = ["69", "108", "122", "101", "114", "111"];

// // Your Code Here
// let result = [];
// myArr.forEach(element => {
//   parseInt(element);
//   result.push(String.fromCharCode(element));
// })
// result = result.join("");


// console.log(result); // Elzero

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 28
// // قم بإنشاء Function بإسم customMerge تقبل منك عدد غير معروف من ال Arrays
// // المطلوب دمج جميع عناصر ال Arrays في Array واحدة والتأكد ان جميع العناصر عبارة عن Numbers
// // لا تقم بإستخدام أي Method تقوم بعمل دمج أو Flat مباشرة وقم بعملية الدمج بنفسك
// // شاهد الأمثلة لترى المطلوب


// // Write Your Function Here
// function customMerge(...args) {
//   let mergedArray = [];
//   args.forEach((array) => {
//     for (let i = 0; i < array.length; i++) {
//       mergedArray.push(parseInt(array[i]));
//     }
//   })
//   return mergedArray.sort((a, b) => a - b);
// }

// console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// // [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 29
// // قم بإنشاء Function بإسم customCalc تقبل منك عدد غير معروف من ال Parameters يمكن أن يكون أرقام أو Strings
// // المطلوب هو جمع الأرقام فقط التي يتم تمريرها لل Function
// // بعد جمعهم المطلوب هو ضرب حاصل الجمع في أول عنصر وآخر عنصر
// // شاهد الأمثلة لترى الفكرة


// // Write Your Function Here

// function customCalc(...els) {
//   let sum = 0;
//   let dob = 0;
//   els.forEach((el) => {
//     if (!isNaN(parseFloat(el))) {
//       sum += +el;
//       dob = sum * els[0] * els[els.length - 1];
//       // console.log(el)
//     }
//   })
//   return dob;
// }

// console.log(customCalc("10", 20, "A", "40", 15));
// // 12750 <= (10 + 20 + 40 + 15) * 10 * 15

// console.log(customCalc(5, "15", 10, 5, 10));
// // 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

// console.log(customCalc(30, 5, "C", 10));
// // 13500 <= (30 + 5 + 10) * 30 * 10

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 30
// // لديك ال Loop التالي
// // نحتاج لأن تكتب ال Code الخاص بك داخل ال Loop لتظهر النتيجة كما في المثال
// // لا تقم بالتعديل على سطر ال Loop الموجود حاليا


// for (let i = 1; i < 100; i += 5) {
//   // Your Code Here
//   console.log(i)
//   i += 5
// }

// // Output Needed
// // 1
// // 11
// // 21
// // 31
// // 41
// // 51
// // 61
// // 71
// // 81
// // 91

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 31
// // لديك ال Array التالية
// // نريد عمل Clone لل Array ب 9 طرق مختلفة
// // تم عمل Clone مرة لتفهم الفكرة

// let myArray = [100, 200, 300, 400];

// // // Method 1
// // let clonedArray = [...myArray];

// // // Method 2
// // let clonedArray = myArray;

// // Method 3
// // let clonedArray = Array.from(new Set([...myArray]));
// // let clonedArray = Object.values(clonedArray2);

// // Method 4
// // let clonedArray = myArray.slice();

// // Method 5
// // let clonedArray = [].concat(myArray);

// // Method 6
// // let clonedArray = Array.from(myArray);

// // Method 7
// // let clonedArray = Object.assign([], myArray);

// // Method 8
// // let clonedArray = myArray.map(item => item);

// // Method 9
// // let clonedArray = myArray.filter(() => true);

// // Method 10
// // let clonedArray = myArray.reduce((acc, curr) => {
// //   acc.push(curr);
// //   return acc;
// // }, []);


// console.log(clonedArray); // [100, 200, 300, 400]

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 32
// // لديك المتغير التالي عبارة عن String وبداخله رقم
// // المطلوب تحويله إلى رقم ب 7 طرق مختلفة
// // هناك طريقة كمثال لتفهم الفكرة
// // في المثال الموجود إستخدمنا العمليات الحسابية وتكرارها بعلامة أخرى يعتبر نفس الحل

// let strNumber = "10";

// // Method 1
// console.log(strNumber * 1); // 10
// console.log(strNumber - 0); // 10 <= Same Solution
// console.log(+strNumber) // 2
// console.log(Number(strNumber)); // 3
// console.log(parseInt(strNumber)) // 4
// console.log(parseFloat(strNumber)) // 5
// console.log(eval(strNumber)) // 6
// console.log(Math.ceil(strNumber)) // 7


// // Output Needed
// // 10


////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 33
// // المطلوب عمل الشكل التالي في ال Console
// // شاهد الصورة لترى المطلوب

// console.log('%c elzero web school', 'background: blue; color: white; padding: 10px; font-size: 20px');

////////////////////////////////////////////////
////////////////////////////////////////////////

// لديك ال Array التالية تحتوي على الكثير من العناصر المكررة
// نريد أن نسترجع ال Array بدون العناصر المكررة
// شاهد المثال لتفهم الفكرة
// المطلوب عمل السابق ب 4 طرق مختلفة

// let arr = [1, 1, 1, 2, 3, 4, 3];

// // let uniqueElements = [...new Set(arr)];


// console.log(uniqueElements); // [1, 2, 3, 4]

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 35
// // قم بعمل Generate ل Serial Number مكون من 20 Characters
// // ال Serial يتغير كلما يتم عمل Refresh للصفحة
// // مكونات ال Serial تكون عبارة عن رقم أو حرف كبير أو صغير فقط
// // شاهد المثال لتفهم الفكرة مع العلم الأرقام عندك ستكون مختلفة

// let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let serial = Array.from({ length: 20 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');

// // قمنا بتوليد الارقام والاحرف عشوائيا بدلا من عمل لوب على المتغير

// // First Refresh
// console.log(serial); // 9cBcrg3kcWF4GZSlWXAM

// // Second Refresh
// console.log(serial); // vPeu6HXBgiXXj6jpch4P

// // Third Refresh
// console.log(serial); // RQuHFBjCdnp0Ghhp0544

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 36
// // قم بتوليد جميع الحروف الصغيرة من a إلى z بطريقة دايناميكية
// // شاهد المثال لتفهم المطلوب
// // المطلوب عمل ما سبق بأكثر من طريقة

// // Write Your Code Here
// // let smallLetters = "";
// // for (let i = 0; i < 26; i++) {
// //   smallLetters += String.fromCharCode(i + 97);
// // }
// // console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz

// console.log("################################################3")

// let smallLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i)).join('');
// console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 37
// // لديك متفيرين فيهم رقم وتحتهم مجموعة من الشروط
// // نريد كتابة نفس الشروط ولكن بواسطة ال Ternary Operator


// let numOne = 100;
// let numTwo = 200;

// // if (numOne > numTwo) {
// //   console.log("1st > 2nd");
// // } else if (numOne < numTwo) {
// //   console.log("1st < 2nd");
// // } else {
// //   console.log("1st = 2nd");
// // }


// // Write Your Ternary Operator Code Here
// numOne > numTwo ? console.log("1st > 2nd") : numOne < numTwo ? console.log("1st < 2nd") : console.log("1st = 2nd");

// // 1st < 2nd

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 38
// // لديك String يحتوي على جملة
// // نريد أن نطبع الجملة بحيث يكون أول حرف من كل كلمة Capital وباقي الكلمة Small
// // شاهد المثال لتفهم الفكرة

// let str = "i lovE elzeRO weB schOOL";

// let str1 = str.split(" ").map((x) => x[0].toUpperCase() + x.slice(1, x.length).toLowerCase()).join(" ");

// console.log(str1)

// // Output Needed
// // "I Love Elzero Web School"

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 39
// // لديك Array تحتوي على مجموعة من الأسماء
// // المطلوب عدم التعديل على أي Code من الموجودين
// // بواسطة ما تعلمته اكتب سطر ال Code الذي بمنعنا من إضافة عنصر جديد لل Array
// // شاهد ال Output المطلوب في المثال

// let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

// // Write Your Code Here


// Object.seal(myData);
// console.log("################################################3")
// Object.freeze(myData);

// myData.push("Name");
// console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 40
// // لدينا Object يحتوي على مجموعة من الخواص
// // غير مسموح بالتعديل على أي Code من الموجودين
// // بسطر واحد ومن خلال ما تعلمته اكتب ما يمنعنا من إضافة خاصية جديدة لل Object
// // شاهد المثال لترى المطلوب

// const myData = {
//   user: "Elzero",
//   age: 41,
//   country: "Egypt",
// };

// // Write Your Code Here
// Object.freeze(myData);
// console.log("################################################3")
// Object.seal(myData);


// myData.skill = "Programming";

// console.log(myData.user); // Elzero
// console.log(myData.age); // 41
// console.log(myData.country); // Egypt
// console.log(myData.skill); // Undefined


////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 41
// // لديك ال Object التالي
// // نحتاج لعمل نسخة منه ب 4 طرق مختلفة
// // شاهد المثال لترى المطلوب
// // خواص ال Object لن تحتوي على Function

// const myData = {
//   user: "Elzero",
//   age: 41,
//   country: "Egypt",
// };

// // Your Code Here
// // cloned = myData;
// // let cloned = Object.assign(myData);
// // let cloned = new Object(myData);
// // let cloned = { ...myData };
// // let cloned = JSON.parse(JSON.stringify(myData));
// // let cloned = Object.fromEntries(Object.entries(myData));



// console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 42
// // مطلوب طباعة الرسالة في الأسفل عند الضغط على زر Ctrl + Alt + Shift
// // المطلوب ان تظهر الرسالة مرة واحدة ولا تتكرر

// let ctrlPressed = false;
// let altPressed = false;
// let shiftPressed = false;

// window.addEventListener('keydown', (event) => {
//   if (event.key === "Control") {
//     ctrlPressed = true;
//   } else if (event.key === "Alt") {
//     altPressed = true;
//   } else if (event.key === "Shift") {
//     shiftPressed = true;
//   }

//   if (ctrlPressed && altPressed && shiftPressed) {
//     console.log("You Pressed Ctrl + Alt + Shift");
//     window.alert("You Pressed Ctrl + Alt + Shift");
//     ctrlPressed = false;
//     altPressed = false;
//     shiftPressed = false;
//   }
// });

// // console.log("################################################3")

// window.addEventListener('keydown', (event) => {
//   if (event.ctrlKey && event.altKey && event.shiftKey) {
//     console.log("You Pressed Ctrl + Alt + Shift");
//     window.alert("You Pressed Ctrl + Alt + Shift");
//   }
// });


// // Message Needed In Output
// // "You Pressed Ctrl + Alt + Shift"

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 43
// // لديك رابط حساب موقع ElzeroWebSchool على موقع Github
// // المطلوب جلب جميع أسماء ال Repositories مع عدد النجوم والرابط الخاص بهم في جدول كما في المثال
// // لديك بنية خاصة بصفحة ال HTML ممنوع التعديل عليها ولديك أيضا بعض تنسيقات ال CSS
// // يجب أن يتم فتح الرابط في صفحة منفصلة
// // شاهد الصورة لترى المطلوب
// // يجب جلب 15 نتيجة فقط

// // <style>
// //   table {
// //     width: 800px;
// //     margin: 20px auto;
// //     background-color: #fdfdfd;
// //     text-align: center;
// //   }
// //   table td {
// //     padding: 15px;
// //     border: 1px solid #ccc;
// //   }
// // </style>
// // <div class="result">
// //   <table>
// //     <tbody>
// //       <tr>
// //         <td>Repository Name</td>
// //         <td>Stars</td>
// //         <td>Visit Link</td>
// //       </tr>
// //     </tbody>
// //   </table>
// // </div>




// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     // console.log(jsData);
//     for (let i = 0; i < jsData.length; i++) {
//       // console.log(jsData[i].name);
//       // console.log(jsData[i].stargazers_count);
//       // console.log(jsData[i].url);
//       let td = document.createElement("td");
//       td.appendChild(document.createTextNode(jsData[i].name));
//       let td1 = document.createElement("td");
//       td1.appendChild(document.createTextNode(jsData[i].stargazers_count));
//       let a = document.createElement("a");
//       a.setAttribute('href', jsData[i].url);
//       a.setAttribute('target', '_blank');
//       a.innerHTML = "visit";
//       let td2 = document.createElement("td");
//       td2.appendChild(a);
//       let tr = document.createElement("tr")
//       tr.appendChild(td);
//       tr.appendChild(td1);
//       tr.appendChild(td2);
//       document.getElementsByTagName("tbody")[0].appendChild(tr);

//     }
//   }
// };

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 44
// // لديك متغير عبارة عن رقم
// // نريد أن نطبع الأرقام الفردية تحت هذا الرقم ووصولا إلى رقم 1
// // نريد أن نطبع رقم ونستثني الذي بعده وهكذا
// // مثلا لدينا رقم 30 الأرقام الفردية تحته هي 29 و 27 و 25 و 23 وهكذا المطلوب طباعة 29 و 25 وهكذا
// // شاهد المثال لترى الفكرة
// // الطلب الأول هو طباعة الأرقام فقط
// // الطلب الثاني تحته هو طباعة مجموع هذه الأرقام مع بعضها

// let last = 30;

// let result = 0;
// for (last; last >= 0; last -= 4) {
//   console.log(last - 1);
//   result = result + last;

// }
// console.log("#########")
// console.log(result);


// // First Request Output Needed
// // 29
// // 25
// // 21
// // 17
// // 13
// // 9
// // 5
// // 1

// // Second Request Output Needed
// // 120

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 45
// // لديك متغير بإسم rangeEnd يحتوي على رقم
// // نريد أن نقوم بعمل Range بطريقة دايناميكية من رقم 1 وحتى ال rangeEnd
// // شاهد المثال لترى المطلوب
// // المطلوب عمل ما سبق ب 3 طرق مختلفة

// let rangeEnd = 10;

// // method 1
// // let myRange = [];
// // for (let i = rangeEnd; i > 0; i--) {
// //   myRange.unshift(i);
// // }

// // method 2
// // الطريقة الثالثة: استخدام Spread Operator و Array.keys()
// // let myRange = [...Array(rangeEnd).keys()].map((i) => i + 1);


// // method 3
// // الطريقة الثانية: استخدام Array.from()
// let myRange = Array.from({ length: rangeEnd }, (_, index) => index + 1);


// // Output Needed
// console.log(myRange); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 46
// // لديك Array تحتوي على مجموعة من الأرقام
// // المطلوب جلب أكبر عنصر في ال Array
// // المطلوب عمل السابق ب 4 طرق مختلفة
// // شاهد المثال لتفهم المطلوب

// let nums = [10, -20, 300, 50, 100, -50];

// // methods 1
// // let maxNumber = nums.reduce((p, c) => p > c ? p : c);

// // methods 2
// let maxNumber = nums.sort((a, b) => a - b).pop();

// // methds 3
// // let maxNumber = Math.max(...nums);

// // methos 4
// let maxNumber = nums[0];
// for (let num of nums) {
//   if (num > maxNumber) {
//     maxNumber = num;
//   }
// }


// console.log(maxNumber); // 300

////////////////////////////////////////////////
////////////////////////////////////////////////


// <div class="form">
// <div>Enter Your Text</div>
// <textarea id="textInput" placeholder="Enter Text..."></textarea>
// <button onclick="saveToFile()">Save To File</button>
// </div>









// function saveToFile() {
//   const textToSave = document.getElementById('textInput').value;

//   // Create a Blob containing the text
//   const blob = new Blob([textToSave], { type: 'text/plain' });

//   // Create a temporary URL for the Blob
//   const url = URL.createObjectURL(blob);

//   // Create a link element
//   const link = document.createElement('a');
//   link.href = url;
//   link.download = 'saved_text.txt'; // Set the file name here

//   // Simulate a click to trigger the download
//   document.body.appendChild(link);
//   link.click();

//   // Clean up
//   document.body.removeChild(link);
//   URL.revokeObjectURL(url);
// }

////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 48
// // لديك Function تقبل منك Parameter واحد وهو عبارة عن رقم
// // يجب عليك عمل الشكل الهرمي الموجود كما في المثال
// // الرقم هو عدد الصفوف الموجودة في الشكل
// // المطلوب عمل التالي ب Loop واحد فقط
// // شاهد المثال لتفهم الفكرة


// function createStars(num) {
//   // Your Code Here
//   for (let i = 1; i <= num * 2; i = i + 2) {
//     console.log("*".repeat(i))
//   }
// }

// console.log(createStars(8));

// // Output Needed
// // *
// // ***
// // *****
// // *******
// // *********
// // ***********
// // *************
// // ***************

////////////////////////////////////////////////
////////////////////////////////////////////////


// // التكليف 49
// // لديك Function تقبل منك Parameter واحد وهو عبارة عن رقم
// // يجب عليك عمل الشكل الهرمي الموجود كما في المثال
// // الرقم هو عدد الصفوف الموجودة في الشكل
// // شاهد المثال لتفهم الفكرة
// function createStars(num) {
//   const totalRows = num * 2 - 1;

//   // هرم أول
//   for (let i = 1; i <= totalRows; i += 2) {
//     const stars = '*'.repeat(i);
//     console.log(stars);
//   }

//   // هرم ثاني (العد العكسي)
//   for (let i = totalRows - 2; i >= 1; i -= 2) {
//     const stars = '*'.repeat(i);
//     console.log(stars);
//   }
// }

// console.log(createStars(3));

// // Output Needed
// // *
// // ***
// // *****
// // ***
// // *

// console.log(createStars(7));

// // Output Needed
// // *
// // ***
// // *****
// // *******
// // *********
// // ***********
// // *************
// // ***********
// // *********
// // *******
// // *****
// // ***
// // *


////////////////////////////////////////////////
////////////////////////////////////////////////

// // التكليف 50
// // لديك Function تقبل منك Parameter واحد وهو عبارة عن رقم
// // يجب عليك عمل الشكل الهرمي الموجود كما في المثال
// // الرقم هو عدد الصفوف الموجودة في الشكل
// // ممنوع عمل Nested Loop
// // شاهد المثال لتفهم الفكرة


// // function createStars(rows) {
// //   // Your Code Here
// //   // 5 spaces 6 rows 11 stars
// //   let spaces = rows - 1;
// //   let stars = 2 * rows - 1;
// //   for (let i = 1; i <= rows; i++) {
// //     let space = ' '.repeat(i);
// //     let star = '*'.repeat(stars);
// //     console.log(space + star);
// //     stars -= 2;
// //   }
// //   stars += 2;
// //   for (let i = 1; i <= rows; i++) {
// //     let space = ' '.repeat(spaces + 1);
// //     let star = '*'.repeat(stars);
// //     console.log(space + star);
// //     spaces--;
// //     stars += 2;
// //   }

// // }

// // console.log(createStars(6));

// // console.log("#######################################################")

// function createStars(rows) {
//   const totalRows = rows * 2 - 1;
//   let stars = totalRows;
//   let spaces = 0;

//   for (let i = 1; i <= totalRows; i++) {
//     const space = ' '.repeat(spaces);
//     const star = '*'.repeat(stars);
//     console.log(space + star);

//     if (i < rows) {
//       stars -= 2;
//       spaces++;
//     } else {
//       stars += 2;
//       spaces--;
//     }
//   }
// }

// createStars(6); // استدعاء الدالة مع القيمة المطلوبة


// // Output Needed
// // ***********
// //  *********
// //   *******
// //    *****
// //     ***
// //      *
// //      *
// //     ***
// //    *****
// //   *******
// //  *********
// // ***********

////////////////////////////////////////////////
////////////////////////////////////////////////

















//////////////////////////////////////////////////////
// .toLocaleString()  تنسيق النصوص والوقت على حسب المنطقة  التكليف ال 11

// let st = "elzero";  // تحويل اول حرف الحرف كبير بالاستفادة من الدالة replace()
// st.replace(st.charAt(0), st.charAt(0).toUpperCase())

// في التكليف 42 يوجد طريقة لعمل اختصار من الكيبورد يقوم بوظيفة ما
// يمكنك التحقق من الضغط على المفتاح بطريقتين مختلفتين يمكنك مراجعة الكود للنظر فيه