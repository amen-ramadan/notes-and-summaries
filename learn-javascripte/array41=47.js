/*    الدرس 40
arrays
بتقدر توصل للنعاصر بالمصفوفة بهذه الطريقة



انشاء مصفوفة

let myfriends = ['ahmed', 'mahmoud', "sayed", ["marwan", "ali"]];


الوصول للمصفوفة والعناصر الموجودة بداخلها



console.log(`hello ${myfriends[0]}`)
console.log(`hello ${myfriends[2]}`) بتوصل لمحمود
console.log(`hello ${myfriends[1][2]}`) بتوصل لحرف ال h عند محمود
console.log(`hello ${myfriends[3][1]}`)
console.log(`hello ${myfriends[3][1][2]}`)  بتوصل لحرف ال i بكلمة علي



            التعديل على عنصر المصفوفة

myfriends[3] = "gamal"; هيك بتقدر تعدل على العناصر الموجوودة داخل المصفوفة

myfriends[2] = ["sameh", "amen"];  هون عدّلنا علة عنصر وساوينا مصفوفة بداخل مصفوفة



                      هذه الدالة تقوم بفحص المصفوفة هل هي مصفوفة ام لا

console.log(Array.isArray(myfriends));
*/
///////////////////////////////////////////////////////////

/*

الدرس 41

-length

اذا بدك تحدث اخر عنصر بطريقة داينمكية

let myfrind =['ahmed', 'mahmoud', "sayed", "alaa"];

myfrind[mrfrind.length - 1 ] = "gamal";

///////////////////

اذا بدك تضيف العنصر اضافة

myfrind[mrfrind.length] = "gamal";

///////////////////

وقت تكتب index غير موجود بالمصفوفة بضيفو
والعنصر يلي بين القيمة يلي ضفتها وبين اخر قيمة فعلية
موجودة عندك بتكون فاضية

///////////////////

فيك تعمل كونترول للمصفوفة بهي الطريقة

myfrind.length = 2 ;

حاليا صارت المصفوفة بتحتوي على عناصر اقل

*/
//////////////////////////////////////////////////////////////
/*
الدرس 42 :
اضافة العاصر وحذفها عن طريق ال methods


arrays method [adding and removing]
- unshift("" , "") add element to the first .
- push("","")    adds element to the end.
- pop()         removes last element from array.
- shift("")      remove first element of an array.

  بتكتب . وبعدين الخاصية بعد المصفوفة باي مكان بدك ياه


  */

//////////////////////////////////////////////////////////////

/*
الدرس 43 :

بعض ال  method للبحث عن العناصر داخل ال arrays

- indexof(search element , from index[opt]) مكان البحث اختياري
بترجع رقم ال انديكس الموجودة فيه
- lastindexof(search element, from index [opt])
- includes (valuetofind, from index [opt])  بترجع true او false

لما بتبحث عن قيمة غير موجودة بترجعلك سالب واحد وهاد الحكي بينطبق على اول خاصينين بشس

*/

////////////////////////////////////////////////////////
/*
الدرس 44:
method for sorting Arrays in JavaScript بتفيد بترتيب العناصر

- sort(function[opt]) بترتب العناصر ابجديا
- reverse() بتعكس الترتيب
*/
////////////////////////////////////////////////////////////
/*
الدرس 45 :
slice() splice()

- slice(start[opt], end[opt] not incloding end)
هي الخاصية بتقطع وبتزبط بس ما بتعدل على المصفوفة الاساسية
- splice( start[mand] , deletecount [opt][ 0 no remove], the items to add [opt])
  if negatev => start from the end
  هذه الخاصية بتعطيها باول قيمة من وين بدها تبلش قص
  وبالقيمة الثانية كم عنصر تحذف وبتحذف باتجاه اليمين ومن المكان يلي بدأت فيه
  القيمة الثالثة هي العناصر يلي بدك تضيفها والعناصر هي بتنضاف بالمكان
  يلي بلشت فيه وحذفت منو

  بينكتبو بعد اسم المصفوفة بتكتب . واسم الخاصية وبتكمل عادي
*/
/////////////////////////////////////////////////////////
/*
الدرس 46:
concat (array, array, string)  => بتعمل جمع للعناصر
join(separator)
بحول المصفوفة ل string 
consol.log(allfrinends.join("|").touppercase)

*/
