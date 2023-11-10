/*
  - find element by id, class name , tag Name , css selectors, collection.
  let myIdElement = document.getElementById("my-div")
  let myTagElements = document.getElementsByTagName("p")[0];
  let myClassElement = document.getElementsByClassName("my-span");
  let myQueryElement = document.querySelector(".special"); // هذه الخاصية تدعم ان تعطيها كلاس او اي دي او اي شيء تريد تحديده من السيليكتور
  let myQueryAllElement = document.querySelectorAll(".my-span");

  - title
  - body
  - images
  - forms
  - links

  */

///////////////////////////////////////////////////////

/*
<div class="js">javascript<span>div</span></div>
    <img class="link" src="" alt="">
    <a href="#">google</a>
     */

/*
  - innerHtml => بضيف النص وبترجمو لل html بس اذا تاغ رح يعدل عليه ويساويه عنصر طبيعي داخل الصفحة
  - textContent => بضيف نص ولو كان النص تاغات عناصر html
  - change Attributes directly
  - change Attributes With methods
    - git Attribute
    - set Attribute

  - search innerText
  */
/*
let myElement = document.querySelector('.js');

// example for innerHtml and textContent

myElement.innerHTML = "text from <span>Main.js</span> file";
myElement.textContent = "text from <span>Main.js</span> file";

// example Direct Change Attribute

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture"; // التايتل مش موجود ف رح يضيفو
document.images[0].id = "pic";
document.images[0].className = "img";

// example change Attributes With methods

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class")); // بتعطيه اسم ااتربيوت برجعلك قيمته
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter,com"); // بياخد اول قيمة اسم التريبيوت والقيمة الثانية قيمة التريبيوت
myLink.setAttribute("title", "twitter"); */

/////////////////////////////////////////////////////

/*
  dom [check Attributes]
    - Element.attributes
    -  قائمة بجميع الاتريبيوتس الموجودة عندك
    - Element.hasAttribute
    - برجعلك true and false يعني بشيك عليه
    - Element.hasAttributes
    - Element.removeAttribute
*/
////////////////////////////////////////////////////////////////

/*
dom [create element]
  -create element
  - create text Comment
  - create textNode
  - create Attribute
  - appendChild
*/
/*
let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let  myText = document.createTextNode("product one");
// comment
let myComment = document.createComment("this is div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "testing");

// append comment to element

myElement.appendChild(myComment);

// append text to element
myElement.appendChild(myText);


// append element to body
document.body.appendChild(myElement);
*/
/////////////////////////////////////////////////////////

/*
  dom [create Elements]
  practice product with heading and paragraph
 */
/*
  let myMainElement = document.createElement("div");
  let myHeading = document.createElement("h2");
  let myParagraph = document.createElement("p");

  let myHeadingText = document.createTextNode("product title");
  let myParagraphText = document.createTextNode("product description");


  // add heading text
  myHeading.appendChild(myHeadingText);

  // add heading to main element
  myMainElement.appendChild(myHeading);

  // add paragraph text
  myParagraph.appendChild(myParagraphText);

  // add paragraph to main element
  myMainElement.appendChild(myParagraph);


  myMainElement.className = "product";
 */
///////////////////////////////////////////////////////////////

/*
dom [deal with children]
  - children

  - برجعلك الابناء الموجودة بالعنصر
  ما الو علاقة بالكومينت او التكست هو بس بجبلك العناصر
  بتقدر تدخل على واحد من العناصر عن طريق الاينديكس تبعو

  - childNodes

  - بجبلك ياهن شقف شقف شي عناصر شي فراغات شي كومينت

  - firstChild

  - بجبلك اول عنصر عندك بغض النظر عن كونو شو هو
  اليمينت كومينت تكست او اللذي منو

  - lastChild
  - firstElementChild
  - lastElementChild
*/
//////////////////////////////////////////////////////////////////

/*
DOM [events]
  - use Events on html
    =>  <button onclick="console.log('clicked')">button</button>



  - use Events on js
    =>
let myBtn = document.getElementById("mybtn");

myBtn.onclick = function () {
  console.log('clicked');
}



  - onclick
  - oncontextmenu
  - onmouseenter
  - onmouseleave

  - onload
  - onscroll
  تستعمل مع ال window


  - onresize
  تستعمل مع ال window



  الخاصة بالفورم
  - onfocus
  - onblur
  - onsubmit
*/
/////////////////////////////////////////////////////////

/* 
  DOM [events]
    - validate from practice
    - prevent Default
*/

/* 
<form action="">
        <input type="text" name="username" id="">
        <input type="text" name="age" id="">
        <input type="submit" value="Submit Data">
    </form>
    <a href="https://google.com">Google</a>
*/
/* 
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  console.log(userInput.value);
  console.log(userInput.value.length);

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userInput = true;
  }
  if (ageInput.value !== "") {
    ageInput = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();  // منع التصرف الافتراضي
  }
}

document.links[0].onmouseenter = function (event) {
  console.log(event);
  event.preventDefault(); // منع التصرف الافتراضي

} 
*/

