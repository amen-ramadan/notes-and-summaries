
///////////////////////////////////////////////////////////////////////////////

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive الحروف غير حساسة
  g => global
  m => Multilines بيبحث بالاسطر كلها

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

// let myString = "Hello Elzero Web School I Love elzero";

// let regex = /elzero/ig;

// console.log(myString.match(regex));

//////////////////////////////////////////////////////////////

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe));

// let nums = "12345678910";
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));

// let notNums = "12345678910";
// let notNsRe = /[^0-2]/g;
// console.log(notNums.match(notNsRe));

// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));
///////////////////////////////////////////

// let myString = "AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let numsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(specials));
//////////////////////////////////////////////////////////////////////////////////

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// let word = /\w/g;
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));

/////////////////////////////////////////////////////////////////////////////

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  باختصار، "^" تُستخدم للتحقق من بداية السلسلة بناءً على النمط المحدد، بينما "\b" تُستخدم للتحقق من حدود الكلمة في النص.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re));

// console.log(re.test(names));
// console.log(/(\bspam|spam\b)/ig.test("Osama"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));

///////////////////////////////////////////////////////////////////////////////////

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let mailsRe = /\w+@\w+.(com|net)/ig;
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150  05120 0560 350 00"; // 0 Numbers Or No 0
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));

//////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  باختصار، "^" تُستخدم للتحقق من بداية السلسلة بناءً على النمط المحدد، بينما "\b" تُستخدم للتحقق من حدود الكلمة في النص.
  ?= => Followed By Something
  ?! => Not Followed By Something
*/


// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));

// console.log(names.match(/\d\w{5}(?=Z)/ig));
// console.log(names.match(/\d\w{8}(?!Z)/ig));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Regular Expression

  - replace
  - replaceAll

  بتاخد منك قيمتين الاولى هي القيمة يلي بدك تبحث عنها
  والثانية هي القيمة الجديدة يلي بدالها
*/

// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));
// let re = /@/ig;
// console.log(txt.replaceAll(re, "JavaScript"));
// console.log(txt.replaceAll(/@/ig, "JavaScript"));

//////////////////////////////////////////////////////////////////////////////////////

/* <form id="register" action="" method="get">
  <input type="text" id="phone" name="the-phone" maxlength="15" />
  <input type="submit" value="Register" />
</form>
 */

/*
  Regular Expression
  - Input Form Validation Practice
*/

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let validationResult = phoneRe.test(phoneInput);
//   if (validationResult === false) {
//     return false;
//   }
//   return true;
// }

///////////////////////////////////////////////////////////////////////////////////////////////

// المواقع الخاصة بإختبار ال Regular Expression
// Regexr
// RegExTester
// RegEx101

//////////////////////////////////////////////////////////////////////////////////////////////

/*
  Regular Expression
  - Challenge
*/

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:)?(\/\/)?(www.)?elzero.org(.+)?/ig;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////challenge/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/* التكليف 01
لديك ال IP التالي قم بعمل RegExp Pattern لعمل Match لهذا ال IP
 */

// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let re = /\d{4}.\w{2}\d(:\d{4})+/g;

// console.log(ip.match(re));

///////////////////////////////////////////////////////////////////////////////////

/* التكليف 02
لديك متغير يحتوي على بعض الأسماء
المطلوب إنشاء RegExp Pattern لعمل Match للأسماء التي تبدأ ب Os وتنتهي ب O
 */

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";


// let re = /\b(Os)\d*(O)\b/gi;

// console.log(specialNames.match(re));


// Output
// ['Os10O', 'OsO', 'Os100O']

//////////////////////////////////////////////////////////////////////////////////////////////

/* التكليف 03
لديك متغير يحتوي على رقم تليفون بشكل معين
المطلوب إنشاء RegExp Pattern لعمل Match لهذا التليفون
 */

// let phone = "+(995)-123 (4567)";

// let re = /\+\(\d{3}\)(\s|-|_)(\d{3})\s\(\d{4}\)/gi;

// console.log(phone.match(re));

//////////////////////////////////////////////////////////////////////////////


/* التكليف 05
لديك مجموعة من التواريخ
المطلوب عمل Pattern واحد فقط يقوم بعمل Match لجميع هذه التواريخ
 */

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d+(\/|\s-\s|\s)?\d+(\/|\s-\s|\s)?\d+/gi; // Write Pattern Here
//       /\d+.+?\d+.+?\d+/gi

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

