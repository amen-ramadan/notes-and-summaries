/*
  DOM [events simulation]
  - click
  - blur
  - focus
*/
////////////////////////////////////////////////////////

/*
  DOM [class list]
  - classList
  قائمة بالكلاس الموجودة عندك ونوعه اوبجيكت

  - length

  - contains
  بشيك على الكلاس هل هو موجود ام لا


  - item(index)
  => console.log(element.classList.item("2"));
  برجعلك الكلاس الموجود بهذا الايندكس

  - add/remove
  => element.onclick = function () {
    element.classList.add("add-one", "add-two");
  }

  - toggle
  بشوف الكلاس اذا موجود بشيلو واذا مو موجود بضيفو
  وبيقبل منك قيمة وحدة سواء كانت موجودة او لا

  element.onclick = function () {
    element.classList.toggle("show");
  }

*/
////////////////////////////////////////////////////////////////////////

/*
DOM [css]
  - style
  - cssText
  طريقة الكتابة


  - removeProperty(propertyName) [inline, stylesheet]
  => element.style.removeProperty("color");

  - setProperty(propertyName, value, priority)
  element.style.setProperty("font-size", "40px", "important");

  document.styleSheets[0].rules[0].style.removeProperty("line-height");
  document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");

*/
//////////////////////////////////////////////////////////////////////////

/*
  DOM
    - before [element || string]
    - after [element || string]
    - append [element || string]
    - prepend [element || string]
    - remove
*/

//////////////////////////////////////////////////////////////////////

/*
  الاشقاء:
  DOM [traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/
/////////////////////////////////////////////////////////////////

/*
  DOM [cloning]
  - cloneNode(deep)
  deep : بياخد منك ترو وفالس  والمقصود انو ينسخ المحتوى او لا
  الديفولت فولس يعني بينسخ الاتريبيوتس بس المحوى لا


  let myP = document.querySelector("p").cloneNode(true);
  myP.id = `${myP.id}-clone`;

*/
///////////////////////////////////////////////////////////

/* 
  DOM [add event listener]
  - addEventListener
  - use without on 
  - attach multiple events
  - error test

  search
  - capture & Bubbling javascript
  - removeEventListener



  myP.addEventListener("click", function () {
    console.log("masseg from onClick 1 event");
  });
  
  function one () {}
  myP.addEventListener("click", one);
  
  document.addEventListener("click", function (e) {
    if (e.target.classList === "clone") {
      console.log("iam cloned");
    }
  });
  
*/

