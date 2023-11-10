// challenge 101 

/* 
let header = document.createElement("header");
let icon = document.createElement("h1");
let ul = document.createElement("ul");
let iconText = document.createTextNode("Elzero");

for (let i = 1; i <= 4; i++) {
  let li = document.createElement(`li`);
  let textLi = document.createTextNode(`li-${i}`);
  li.appendChild(textLi);
  ul.appendChild(li);
}


icon.appendChild(iconText);
header.appendChild(icon);
header.appendChild(ul);
document.body.prepend(header);

document.body.style.cssText = "padding : 0; margin: 0; box-sizing: border-box; background-color: rgb(236, 236, 236); font-family: Arial; "
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: rgb(255,255,255);"
ul.style.cssText = "display:flex; list-style: none; justify-content: space-around; flex: .5; align-items: center; margin:0;"
icon.style.cssText = "color: rgb(35,169,110); font-size: 26px; margin:0; font-weight: bold;"

/////////////////////////////////////////////////////

let content = document.createElement("div");
content.className = "content";

for (let i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  let span = document.createElement("span");
  let productText = document.createTextNode("product");
  let textSpan = document.createTextNode(`${i}`);
  span.appendChild(textSpan);
  product.appendChild(productText);
  product.prepend(span);
  content.appendChild(product);
  product.style.cssText = "padding: 20px; text-align:center; background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; color: rgb(136, 136, 136); border-radius: 6px;"
  span.style.cssText = "display:block; font-weight: normal; font-size:40px; margin-top:5px; margin-bottom:10px; color:black;"
}
document.body.appendChild(content);

content.style.cssText = "  display: flex;padding: 20px;flex-wrap: wrap;justify-content: center;gap: 20px;min-height: calc(100vh - 142px);box-sizing: border-box;";
///////////////////////////////////////////////////////////////////////////

let footer = document.createElement("footer");
footer.className = "footer";
let textFooter = document.createTextNode("copyright 2023");
footer.appendChild(textFooter);
footer.style.cssText = "background-color: rgb(35,169,110); font-size: 20px; padding:20px; text-align:center; color: white;"
document.body.appendChild(footer);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
<script>
let l = document.links;
window.onload = function () {
    for (let i = 0; i <= l.length; i++) {
        if (l[i].textContent == "Elzero" && l[i].classList.contains("open")) {
            l[i].click();
        }
    }
}
console.log(l)
</script>

<body>
<a class="open" href="https://google.com">Google</a>
<a class="open" href="https://elzero.org">Elzero</a>
<a class="not" href="https://facebook.com">Facebook</a>
<a class="linked" href="https://linkedin.com">Elzero</a>
<script src="challenge94=101.js"></script>
</body>
*/

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/* التكليف الثاني تحدي 

التكليف 02
تحدي
شاهد الشكل التالي
لديك حقلين إدخال واحد لإضافة ال Classes على العنصر ال Current والثاني لحذف ال Classes من العنصر Current
عملية الإضافة تتم بمجرد الخروج من حقل الإدخال Blur
تأكد أن إسم ال Class يتم إضافته ك Small Letters بغض النظر عن المدخل
إذا قام الشخص بكتابة كلمتين بينهم مسافات يتم إضافتهم ك Two Classes أو حذفهم ك Two Classes أيضا
عند الخروج من حقل الإدخال تأكد أن تحذف القيمة الموجودة به
يجب التأكد أن الحقل غير فارغ قبل الخروج منه حتى لا يظهر اي خطأ
يجب عليك عمل Function يتم تشغيلها كل مرة تقوم بالخروج من حقول الإدخال
وظيفة ال Function هي عرض ال Classes الموجودة على العنصر Current في مكان النتيجة في الأسفل
ال Function تقوم بترتيب أسماء ال Classes أبجديا قبل إظهارها
إذا لم يكن هناك أي Classes على العنصر نظهر رسالة "No Classes To Show"
شاهد الشكل لتعرف المطلوب

*/

/* <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn JavaScript</title>
        <style>
            body {
                font-family: Arial, Helvetica, sans-serif;
            }

            .assign {
                text-align: center;
                padding-top: 20px;
            }

            .assign input {
                padding: 10px;
                width: 300px;
                border: 1px solid #ddd;
            }

            .assign input:focus {
                outline: none;
                border-color: #ccc;
            }

            .assign [title="Current"] {
                padding: 20px;
                margin: 10px auto;
                width: 610px;
                background-color: #f1f0f0;
            }

            .assign .classes-list {
                padding: 20px;
                margin: 10px auto;
                width: 610px;
                background-color: #f1f0f0;
            }

            .assign .classes-list h5 {
                margin: 0 0 10px;
                text-align: left;
            }

            .assign .classes-list div span {
                background-color: #ff5722;
                padding: 6px 10px 8px;
                margin-right: 5px;
                border-radius: 6px;
                color: white;
                display: inline-flex;
            }
        </style>
    </head>

    <body>
        <div class="assign">
            <input type="text" class="classes-to-add" placeholder="Add Classes" />
            <input type="text" class="classes-to-remove" placeholder="Remove Classes" />
            <div class="element current" title="Current">Current Element</div>
            <div class="classes-list">
                <h5>Current Element Class Lists</h5>
                <div></div>
            </div>
        </div>
        <script src="challenge94=101.js"></script>
    </body>

    </html> */



/* 
let ad = document.querySelector('.classes-to-add');
let re = document.querySelector('.classes-to-remove');
let tre = re.textContent;
let cur = document.querySelector('[title="Current"]');
let div = document.querySelector('.classes-list div');
let span = document.createElement("span");

ad.onblur = function () {



  let text = ad.value.toLowerCase();
  let words = text.split(" ").filter(word => word.trim() !== ""); // تقسيم النص باستخدام تعبير منتظم للمساحات وتجاوز الفراغات الزائدة

  // ترتيب الكلاسات بشكل أبجدي
  words.sort();


  // إضافة كل كلمة ككلاس إلى العنصر
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    cur.classList.add(word);
  }


  // إضافة النص كنص داخل العنصر
  let textNode = document.createTextNode(words.join(' '));
  span.appendChild(textNode);
  div.appendChild(span);
}


re.onblur = function () {

  let val = re.value.toLowerCase();

  let Words = val.split(' ');

  for (let i = 0; i < Words.length; i++) {
    let Word = Words[i];
    if (cur.classList.contains(Word)) {
      cur.classList.remove(Word);
      span.textContent = span.textContent.replace(Word, '');
    }
    else {
      continue;
    }
  }
}
 */

/* 
التكليف 03
لديك عنصرين موجودين في الصفحة عبارة عن Div و Paragraph
المطلوب إزالة ال Paragraph من الصفحة تماما
أما بخصوص ال Div المطلوب وضع عنصر قبله وعنصر بعده فيهم المطلوب في المثال بالأسفل
*/

/* 

<div class="our-element">Our Element</div>
<p>Paragraph</p>

*/

/* 
output :

<div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div>
*/

/* 
let p = document.getElementsByTagName("p")[0];
p.remove();



let our = document.querySelector(".our-element");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
div1.textContent = "start";
div1.classList.add("start");
div1.setAttribute("title", "start element");
div1.setAttribute("data-value", "start");
div2.textContent = "end";
div2.classList.add("end");
div2.setAttribute("title", "end element");
div2.setAttribute("data-value", "end");

our.before(div1);
our.after(div2);
 */

/* 
التكليف 04
لديك البنية التالية في الصفحة
المطلوب الوصول لكلمة "Elzero" بدون اي مسافات أو New Line
المطلوب جلبها من داخل العنصر وليس كتابتها بيدك 😀
 */

/* 
output: 

<div>
  <span>Hello</span>
  <!-- We Need The Next Text Without Spaces -->
  Elzero
</div>

*/

/* let span = document.getElementsByTagName("span")[0];
let ap = span.nextSibling;
let ap1 = ap.nextSibling;
let ap2 = ap1.nextSibling;
let ap3 = ap2.nextSibling;
console.log(ap2);
 */

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

/* التكليف 05
لديك في الصفحة جميع عناصر ال HTML ولكن وضعنا منها 5 عناصر فقط
المطلوب عند الضغط على أي من العناصر طباعة رسالة في ال Console فيها التالي This Is "Element Type"
الحل بسيط جدا ويكن يحتاج لبعض البحث لكيفية الوصول لنوع العنصر
*/

/*
<div>Element</div>
<span>Element</span>
<p>Element</p>
<article>Element</article>
<section>Element</section>
 */

[...document.body.children].forEach(
  el => (el.onclick = _ => console.log(`this is ${el.localName}`))
);

