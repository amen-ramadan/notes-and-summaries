/*
التكليف 01
قم بإستعمال ال Prompt لجلب رسالة من المستخدم
الرسالة ستكون كالتالي “Print Number From – To”
الرسالة الإفتراضية ستكون كالتالي “Example: 5-20”
سيقوم الشخص بكتابة رقمين وبينهم علامة –
يمكن أن يكون الرقم الأول أكبر من الثاني أو العكس
في كلا الحالتين نقوم بطباعة الأرقام داخل الصفحة من أصغر رقم حتى أكبر رقم. شاهد المثال لتفهم الفكرة
 */


/*
let msg = window.prompt("Print Number From – To", "Example: 5-20").split("-");

let re;
let de;
if (msg[0] > msg[1]) {
  re = Number(msg[0]);
  de = Number(msg[1]);

} else {
  re = Number(msg[1]);
  de = Number(msg[0]);
}

for (de; de <= re; de++) {
  console.log(de)
}
 */

/////////////////////////////////////////////////////////////////////////////////////

/* 
التكليف 02
قم بإنشاء Function تقوم بإنشاء Popup داخل الصفحة كما في الصورة التالية
ال Popup تحتوي على زرار Close عند الضغط عليه يقوم بحذف ال Popup من الصفحة
يجب عليك تشغيل ال Function بعد 5 ثواني من تحميل الصفحة
 */

/* 


function Popup() {

  let dev = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
  let btn = document.createElement("button");
  let x = document.createTextNode("x");
  btn.appendChild(x);
  let textW = document.createTextNode("welcome");
  let textP = document.createTextNode("welcome to Elzero Web School");
  h1.appendChild(textW);
  p.appendChild(textP);
  dev.appendChild(h1);
  dev.appendChild(p)
  dev.appendChild(btn);
  document.body.append(dev);

  btn.onclick = function () {
    dev.remove();
  }

}
setTimeout(Popup, 5000);


ساويت المطلوب لكن مو بنفس التنسيقات المطلوبة في التمرين

 */

/* 
التكليف 03
قم بإنشاء Div داخل الصفحة وبداخله رقم 10 على سبيل المثال
قم عمل Counter يقوم بالعد من الرقم الموجود داخل ال Div وحتى يصل إلى الصفر
عند الوصول إلى الصفر قم بإيقاف العد
 */



/* 
let dev = document.createElement('div');
let textW = document.createTextNode("10");
dev.appendChild(textW);
document.body.append(dev);

function countdown() {
  if (dev.innerText > 0) {
    dev.innerHTML -= 1;
  } else {
    clearInterval();
  }
}

setInterval(countdown, 1000); */

/* 
التكليف 04
قم بإستعمال نفس التكليف السابق كما هو بدون اي تغيير
عند الوصول للرقم 0 بدلا من إيقاف العداد قم بتحويل الصفحة الحالية لموقع الأكاديمية Elzero.org
 */
/* 
let dev = document.createElement('div');
let textW = document.createTextNode("10");
dev.appendChild(textW);
document.body.append(dev);

function countdown() {
  if (dev.innerText > 0) {
    dev.innerHTML -= 1;
  } else {
    location.assign("https://elzero.org/study/javascript-bootcamp-2021-study-plan/");
  }
}

setInterval(countdown, 1000); */

/* 
التكليف 05
قم بإستعمال نفس التكليف السابق كما هو بدون اي تغيير
عند الوصول للرقم 5 قم بفتح صفحة موقع الأكاديمية Elzero.org في Popup
شاهد الصورة لتفهم الفكرة
عند الوصول للرقم صفر لا تنسى إيقاف العداد
 */
/* 
let dev = document.createElement('div');
let textW = document.createTextNode("10");
dev.appendChild(textW);
document.body.append(dev);

function countdown() {
  if (dev.innerText > 0) {
    dev.innerHTML -= 1;
  } else {
    clearInterval(counter);
    let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
    myNewWindow
  }
}

let counter = setInterval(countdown, 1000); */

