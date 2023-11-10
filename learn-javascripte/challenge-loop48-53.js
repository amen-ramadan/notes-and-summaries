
// التكليف 01
// ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
// يجب طباعة الأرقام وإستثناء الرقم 40 كما في المثال
// يجب إستخدام ال Loop For لعمل المطلوب

/*
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i == exclude) continue;
  console.log(i);
}

*/
//////////////////////////////////////////////////////


/* 
التكليف الثاني :

ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأرقام كما في المثال والتوقف عند الرقم 3
إذا كان الرقم اصغر من 10 قم بطباعة صفر قبله
يجب إستخدام ال Loop For لعمل المطلوب

*/
/*
let start = 10;
let end = 0;
let stop = 3;


for (; start >= stop; start--) {
  if (start < 10) console.log(Number(`${end}${start}`))
  else console.log(start);
}

*/

/* 

التكليف 03
ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب

*/
/* 
let start = 1;
let end = 6;
let breaker = 2;

for (; start <= end; start++) {
  console.log(`${start}
  --${breaker}
  --${end - breaker}`);
}
*/

/*

التكليف 04
ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأرقام كما في المثال
قم بكتابة ال Code الخاص بك داخل ال Loop فقط ولا تقم بالتعديل على أي شيء آخر


// Output
10
8
6
4
*/
/*
let index = 10;
let jump = 2;

for (; ;) {
  if (index > jump) {
    console.log(index);
    index = index - jump;
  }
}
*/

/*
التكليف 05
ممنوع إستخدام الأرقام نهائيا ولا الحروف ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأسماء كما في المثال مع وضع رقم قبل كل قيمة بطريقة ديناميكية
قم بإسثتناء الأسماء التي تبدأ بحرف A
يجب إستخدام ال Loop For لعمل المطلوب

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

*/
/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let j = letter.length;
for (let i = letter.length; i <= friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }

  console.log(`"${j} => ${friends[i]}"`)
  j++

}
*/

/*
التكليف 06
ممنوع إستخدام الأرقام أو الحروف نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
المطلوب بإستخدام ال Loop تحويل الحروف الكبير لصغيرة والعكس. شاهد المثال
يجب إستخدام ال Loop For لعمل المطلوب

// Output
"ELzERo"
*/
/*
let start = 0;
let swappedName = "elZerO";

for (let h = start; h < swappedName.length; h++) {
  if (swappedName[h] === swappedName[h].toUpperCase()) {
    swappedName[h] = swappedName[h].toLowerCase();
  }

  else if (swappedName[h] === swappedName[h].toLowerCase()) {
    swappedName[h] = swappedName[h].toUpperCase();
  }
}
console.log(swappedName);

// كان لازم نحط المخرجات داخل متغير فاضي متل مو محلول التمرين
// على اليوتيوب بس انا ما بدي حطن كنت بدي عدل عليهن وهنن بقلب المصفوفة
// وهلق ما ضللي مروة واتاخرت على الشغل وما رح ساويهن

*/