/*
الدرس 64 :

anonymous function

///////////////////////////////////
الدرس 65 :

nested function

////////////////////////////////////
الدرس 66 :

arrow function

no param , param

let print = () => 10;
let print = _ => 10;
let print = (mun1, mun2) => mun1 +mun2;
هذول الامثلة لازم يكون في سطر اوامر واحد بس

اذا كان عندك باراميتر واحد بتقدر تلغي القوس اما اذا فيه 
2 باراميتر ما بتقدر تلغي الوس

///////////////////////////////////////////////////

الدرس 67 :

scope
global and local scope

al function btnsh2 local scope 5as fiha
hada il7ke llvaribel

///////////////////////////////////////////////////

el dars 68 :
scope 
block scope [if, switch, for]

ال var فيها مشكلة لانو لو حطيتها جوا احد هذول الكودات وانت عم 
تنشئ فاريبل رح تعمل اوفر رايت على الفاريبلز العامة بالصفحة 
فيك تستخدم تعريف المتغيرات الثانية مثل let and const 

////////////////////////////////////////////////////
el dars 69 :
scope 
  - lexical scope

search   هي اذا حابب تبحث وتكون وحش وتكمل معلوماتك ابحث عن هذول
  - execution context
  - lexical environment

/////////////////////////////////////////////
el dars 70 : 

challenge:
*/

// [1] one statement in function
// [2] convert to arrow function
// [3] print the output [argument may change]

// let names = function (...name) {
//   //parameter ?

//   return console.log(`string [${name.join("], [")}] => Done !`);
// }

let names = (...name) => `string [${name.join("], [")}] => Done !`

console.log(names("osama", "mohahmed", "ali", "ibrahim"));

// string [osama], [mohahmed], [ali], [ibrahim] => Done.
// string [osama], [mohahmed], [ali], [ibrahim] => Done !