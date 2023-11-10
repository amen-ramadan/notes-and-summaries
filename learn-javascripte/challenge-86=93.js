/*
لديك العنصر التالي في ال HTML عليك إختياره بال JavaScript ب 15 طريقة مختلفة
يمكنك إستخدام querySelector أربع مرات فقط وكذلك querySelectorAll اربع مرات فقط
*/

// <div id="elzero" class="element" name="js">JavaScript</div>

/* let num1 = document.getElementById("elzero");
console.log(num1);

let num2 = document.getElementsByClassName("element");
console.log(num2);

let num3 = document.getElementsByTagName("div");
console.log(num3);

let num4 = document.querySelector("#elzero");
console.log(num4);

let num5 = document.querySelector(".element");
console.log(num5);

let num6 = document.querySelector("[name='js']");
console.log(num6);

let num7 = document.querySelectorAll("#elzero");
console.log(num7);

let num8 = document.querySelectorAll(".element");
console.log(num8);

let num9 = document.querySelectorAll("[name='js']");
console.log(num9);

let num10 = document.getElementsByName("js");
console.log(num10);

let num12 = document.querySelector("div");
console.log(num12);

let num13 = document.querySelectorAll("div");
console.log(num13);

let num11 = document.body.children[0];
console.log(num11);

let num14 = document.body.firstElementChild;
console.log(num14);

let num15 = document.body.childNodes[1];
console.log(num15); */

/////////////////////////////////////////////////////////////////

/*
التكليف 02
لدينا مجموعة من الصور في الصفحة عبارة عن 10 صور بلا Source
المطلوب هو تغيير ال Src Attribute لصورة اللوجو التالية “https://elzero.org/wp-content/themes/elzero/imgs/logo.png”
تغيير محتوى ال Alt Attribute ل Elzero Logo
يجب عمل Loop يقوم بالوظيفة مباشرة ولا تقوم بتكرار ال Code
*/

/* <div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
*/


/*
for (let i = 0; i < document.images.length; i++) {
  document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.images[i].alt = "Elzero logo";
}

console.log(document.images);
*/

///////////////////////////////////////////////////////////////////////

/*
التكليف 03
لديك النموذج التالي الخاص بتحويل العملات
كل ما عليك هو كتابة العملة بالدولار داخل حقل الإدخال
في مكان النتيجة اسفل حقل الإدخال يجب عليك إظهار العملة بالدولار والمقابل لها بالجنيه المصري
الشخص يمكن أن يكتب الرقم أو يقوم بعمل Paste للرقم أيضا
يمكنك تغيير ال div الخاص بالنتيجة وتقوم بالتعديل عليه كما تحب
لا تقوم بتعديل حقل الإدخال ابدا
تنسيقات ال CSS لتجميل الشكل فقط لو أردت عملها لا توجد مشكل
الدولار = 15.6 جنيه مصري
تأكد ان الكسور التي تظهر في النتيجة لا تتعدي رقمين فقط. مثلا 1500.32
*/

/*
<form action="">
  <input type="number" name="dollar" placeholder="USD Dollar" />
  <div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
</form>
*/

/*
let myInput = document.querySelector("input");
let myDiv = document.getElementsByClassName("result")[0];

myInput.oninput = function () {
  myDiv.innerHTML = `${myInput.value} USD Dollar = ${(myInput.value * 1520).toFixed(2)} Egyptian Pound`
} */

/////////////////////////////////////////////////////////


/*
التكليف 04
لديلك عنصريين محتواهم وال Attributes الخاصة بهم مبعثرة
المطلوب نقل المحتوى وال Title Attribute من ال div الأول للثاني ومن الثاني للأول
غير مسموح نهائيا كتابة أرقام أو Strings أو إستعمال True أو False بإستثناء أسماء ال Classes طبعا
يجب عليك إضافة رقم 2 بجانب كلمة Two
شاهد النتيجة لترى المطلوب
*/

/*
<div class="one" title="two">Two</div>
<div class="two" title="one">One</div>
*/

/* let elementOne = document.querySelector('.one');
let elementTwo = document.querySelector('.two');


elementOne.title = elementOne.className;
elementTwo.title = elementTwo.className;

elementOne.textContent = elementOne.className
elementTwo.textContent = `${elementTwo.className} ${elementTwo.attributes.length}`;


console.log(elementOne);
console.log(elementTwo); */

//////////////////////////////////////////////////////

/*
التكليف 05
لديك 5 صور في الصفحة بعضهم يحتوي على ال Alt Attributes والباقي لا
قم بعمل Loop على جميع الصور وتأكد أن ال Alt Attribute موجود أم لا
في حالة كان موجود قم بتغيير القيمة إلى الكلمة Old
في حالة لم يكن موجود قم بتغيير القيمة إلى Elzero New
شاهد النتيجة لترى المطلوب
*/

/*
<img decoding="async" src="#" alt="One" />
<img decoding="async" src="#" />
<img decoding="async" src="#" alt="Three" />
<img decoding="async" src="#" />
<img decoding="async" src="#" />
 */


/*
for (let i = 0; i < document.images.length; i++) {
  if (document.images[i].hasAttribute("alt") === false) {
    document.images[i].alt = "Elzero New";
  }
  else if (document.images[i].hasAttribute("alt") === true) {
    document.images[i].alt = 'Old';
  }
} */


/////////////////////////////////////////////////////////////////


/* 
التكليف 06
تحدي
لديك حقل إدخال تقوم بكتابة عدد العناصر التي تريد إنشائها
لديك حقل آخر يحتوي على نوع العنصر سواء كان Div أو Section
لديك حقل إدخال لكتابة الكلمة التي ستظهر داخل العنصر
لديك زر لبدا عملية الإنشاء
عند الضغط على إنشاء العناصر تأكد أن اي عناصر قديمة تم إنشاءها سوف يتم إزالتها أولا
يمكنك عمل تنسيقات ال CSS بال JavaScript في حالة كنت تريد التمرين على التنسيق بال JavaScript
يمكنك عمل التنسيق بشكل طبيعي بال CSS بدون أي مشكلة
تأكد أن ال Form لا تقوم بإرسال البيانات حتى لا يتم عمل Refresh للصفحة
العنصر يحتوي على ID و Class وال ID يزداد رقم مع كل عنصر شاهد المثال المطلوب لتفهم
*/


/* 
<form action="">
  <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
  <input type="text" name="texts" class="input" placeholder="Elements Text" />
  <select name="type" class="input">
    <option value="Div">Div</option>
    <option value="Section">Section</option>
  </select>
  <input type="submit" name="create" value="Create" />
  <div class="results"></div>
</form>
*/

/* 
النتيجة المطلوبة داخل ال results div هي كالتالي حسب العدد الذي إخترته وحسب نوع العنصر
<div class="box" title="Element" id="id-1">Hello</div>
<div class="box" title="Element" id="id-2">Hello</div>
<div class="box" title="Element" id="id-3">Hello</div>
*/



let myForm = document.getElementsByTagName("form")[0];
let myInputNum = document.getElementsByClassName("input")[0];
let myInputText = document.getElementsByClassName("input")[1];
let mySelect = document.getElementsByTagName("select")[0];
let results = document.getElementsByClassName("results")[0];

let sub = document.getElementsByName("create")[0];
sub.style.backGroundColor = "gray";
sub.style.display = "block";
sub.style.width = "200px";
sub.style.color = "black";
sub.style.padding = "10px";
sub.style.margin = "20px auto";

myForm.onsubmit = function (el) {
  el.preventDefault();
};

sub.onclick = function () {


  results.innerHTML = "";

  for (let i = 1; i <= myInputNum.value; i++) {

    let myElement = document.createElement(mySelect.value);
    let myText = document.createTextNode(`${myInputText.value}`);
    myElement.appendChild(myText);
    results.appendChild(myElement);
    myElement.title = "element";
    myElement.className = "box";
    myElement.id = `id-${i}`;

    myElement.style.display = "inline-block";
    myElement.style.width = "200px";
    myElement.style.margin = "20px";
    myElement.style.padding = "10px";
    myElement.style.color = "white";
    myElement.style.backgroundColor = "blue";
    myElement.style.borderRadius = ".5rem";
    myElement.style.textAlign = "center";
  }


}



