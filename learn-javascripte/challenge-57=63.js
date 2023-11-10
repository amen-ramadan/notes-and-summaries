/*
التكليف 01
قم بإنشاء Function تظهر رسالة ترحيب لكل شخص بأي إسم تريده
ال Function تقبل إثنين Parameters وهما إسم الشخص والنوع سواء ذكر أو انثى
قم بطباعة رسالة ترحيبية للشخص فيها إسمه وقبل الإسم Mr أو Miss بناء على نوع الشخص سواء ذكر أو انثى
لو لم يكتب الشخص نوعه ويفضل عدم ذكره لا تطبع Mr ولا Miss وإطبع الرسالة الترحيبية فقط
*/

/* 
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    theGender = "mr";
  }
  else if (theGender === "Female") {
    theGender = "miss";
  }
  else if (theGender === undefined) {
    theGender = "";
  }
  console.log(`hello ${theGender} ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

/*
التكليف 02
قم بإنشاء Function تقوم بعمل عمليات حسابية مختلفة
ال Function تقبل ثلاثة Parameters هم الرقم الأول والثاني ونوع العملية الحسابية
ال Function تقوم بعمل العملية الحسابية التي تكتبها على الرقمين وهي تحتوي على 3 عمليات فقط ( add | subtract | multiply )
في حالة لم يتم كتابة نوع العملية الحسابية قم بجمع الرقمين
في حالة تم كتابة رقم واحد فقط داخل ال Function قم بإظهار رسالة في ال Console تفيد بأن الرقم الثاني غير موجود
*/

/*
function calculate(firstNum, secondNum, operation = "add") {
  let result;
  if (firstNum === undefined || secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }
  if (operation === "subtract") {
    result = firstNum - secondNum;
  }
  else if (operation === "multiply") {
    result = firstNum * secondNum;
  }
  else if (operation === "add") {
    result = firstNum + secondNum;
  }
  console.log(result);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

 */

/*
التكليف 03
قم بإنشاء Function تقوم بحساب عمرك بجميع وحدات الوقت
ال Function تقبل Parameter واحد فقط هو عمرك بالسنين
المطلوب طباعة عمرك بالشهور والأسابيع والأيام والساعات والدقائق والثواني
المطلوب طباعة كل وحدة من وحدات الوقت في سطر منفصل في ال Console
يجب التأكد من أن العمر أكبر من 10 وأقل من 100 وفي حالة غير ذلك إطبع رسالة تفيد أن العمر خارج النطاق.
*/

/*
function ageInTime(theAge) {
  let months = theAge * 12;
  let weeks = months * 4;
  let days = weeks * 7;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;
  if (theAge > 100 || theAge < 0) {
    console.log(`Age Out Of Range`)
  }
  else {
    console.log(`Your age in months ${months}
    and weeks ${weeks}
    and days ${days}
    and hours ${hours}
    and minutes ${minutes} 
    and seconds ${seconds}`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

*/

/*
التكليف 05
قم بإنشاء Function تقوم بإنشاء Select Box في صفحة ال HTML
ال Function تقبل منك إثنين Parameters الأول هو عام البداية والثاني هو عام النهاية
قم بإنشاء ال Select Box يحتوي على Options كل واحد فيهم فيه العام حتى النهاية
شاهد المثال لترى المطلوب


<select>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
</select>
*/




/* 
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (startYear; startYear <= endYear; startYear++) {
    document.write(`<option value="${startYear}">${startYear}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

*/


/*
التكليف 06
قم بإنشاء Function تقوم بضرب جميع الأعداد التي تمررها لها في بعضها
غير معروف كم عدد ال Parameters التي ستمررها لل Function
إذا كان ال Argument ألمستخدم في ال Function عبارة عن String لا تستعمله مع الأرقام
إذا كان ال Argument عبارة عن Float قم بتحويله ل Integer قبل بدأ عملية الضرب
*/



function multiply(...num) {
  let result = 1;
  for (let i = 0; i <= num.length; i++) {
    if (typeof num[i] !== "number") {
      continue;
    }
    result *= Math.floor(num[i]);
  }
  console.log(result);

}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000