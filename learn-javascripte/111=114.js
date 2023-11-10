/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
/* window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";
 */
// Get
/* console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);
 */
// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
/* console.log(window.localStorage.key(0));
 */
// Set Color In Page
/* document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage); */

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// هااااااااااااااااااااام


//html
/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
    <link rel="stylesheet" href="main.css" />
    <style>
        body {
            background-color: #eee;
        }

        ul {
            padding: 0;
            margin: 0;
            background-color: #ddd;
            margin: 20px auto;
            padding: 20px;
            width: 400px;
            list-style: none;
            display: flex;
            justify-content: space-between;
        }

        ul li {
            width: 60px;
            height: 60px;
            border: 2px solid transparent;
            opacity: 0.4;
            cursor: pointer;
            transition: 0.3s;
        }

        ul li.active,
        ul li:hover {
            opacity: 1;
        }

        ul li:first-child {
            background-color: red;
        }

        ul li:nth-child(2) {
            background-color: green;
        }

        ul li:nth-child(3) {
            background-color: blue;
        }

        ul li:nth-child(4) {
            background-color: black;
        }

        .experiment {
            background-color: red;
            width: 600px;
            height: 300px;
            margin: 20px auto;
        }
    </style>
</head>

<body>
    <ul>
        <li class="active" data-amen="red"></li>
        <li data-amen="green"></li>
        <li data-amen="blue"></li>
        <li data-amen="black"></li>
    </ul>
    <div class="experiment"></div>
    <script src="111=114.js"></script>
</body>

</html> */

//js

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/
/*
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("amen")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("amen");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-amen="${window.localStorage.getItem("amen")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.amen);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("amen", e.currentTarget.dataset.amen);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.amen;
  });
}); */

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

/* <form action="">
  <input type="text" class="name" />
</form> */

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");


/*
document.querySelector(".name").onblur = function () {
  // console.log(this.value);
  window.localStorage.setItem("input-name", this.value);
}; */

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
<div class="container">
        <div class="form">
            <input type="text" class="input" />
            <input type="submit" class="add" value="add task">
        </div>
        <div class="tasks">
        </div>
    </div>
 */
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

/* <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100&display=swap"
        rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100&display=swap');
    </style>
</head>

<body>
    <label for="fonts">fonts</label>
    <select name="" id="fonts">
        <option value="Cairo" selected>Cairo</option>
        <option value="Roboto">roboto</option>
        <option value="Open-Sans">open-sans</option>
    </select>
    <br>
    <label for="colors">colors</label>
    <select name="" id="colors">
        <option value="red" selected>red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="black">black</option>
        <option value="pink">pink</option>
    </select>
    <br>
    <label for="sizes">sizes</label>
    <select name="" id="sizes">
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
        <option value="22px">22px</option>
        <option value="24px">24px</option>
        <option value="26px">26px</option>
        <option value="40px">40px</option>
    </select>
    <script src="challenge111=114.js"></script>
</body>

</html> */


/* 

    
let tt = document.querySelector(".input");
let dd = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

dd.addEventListener('click', () => {
  let myp = document.createElement("p");
  let textValue = tt.value; // استخدام قيمة الإدخال
  let key = "amen_" + Date.now(); // إنشاء مفتاح فريد باستخدام تاريخ الوقت
  window.localStorage.setItem(key, textValue); // حفظ القيمة في localStorage بمفتاح فريد
  myp.innerText = textValue; // تعيين النص في العنصر p
  tasks.appendChild(myp);

  // مسح قيمة الإدخال بعد الإضافة
  tt.value = "";
})



 */