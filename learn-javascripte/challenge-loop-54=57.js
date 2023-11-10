// التكليف 01
// ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
// يجب عدم طباعة الأرقام ولا الاسماء التي تبدأ بحرف A
// يجب إستخدام ال Loop While لعمل المطلوب



let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (typeof friends[index] === "number" || friends[index].startsWith("A")) {
    index++;
    continue;
  }
  console.log(`"${++counter} => ${friends[index]}"`)
  index++;
}





// Output
// "1 => Sayed"
// "2 => Mahmoud"