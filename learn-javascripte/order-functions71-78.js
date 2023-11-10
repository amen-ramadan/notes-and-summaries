/*
  - map
  --- method creates a new array
  --- بتطبق الفكرة تبعك على عناصر المصفوفة تبعك بس بمصفوفة جديدة يعني ما بتعدل على المصفوفة يلي عندك
  ---

let MyNums = [1, 2, 3, 4, 5, 6]

let addSelf = MyNums.map(function (element, index, arr) {
  الايليمينت اجباري بس الاراي والاينديكس اختياري
  return element + element;
}, 10)
console.log(addSelf);


نفس الفكرة ب arrow function
let addSelf = MyNums.map((element) => element + element);

console.log(addSelf);
*/

/*
الدرس الثاني :
  - map
    - swap cases
    - inverted Numbers
    - ignore boolean value
*/
/*

let swappingCases = "eLZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreBooleans = "ELz123er4o";



// التمرين الأول
let sw = swappingCases.split("").map(function (ele) {
  // condition ? true : false
  return ele === ele.toUpperCase() ? ele.toUpperCase() : ele.toUpperCase();
})
join('');

console.log(sw);


// التمرين الثاني

let inv = invertedNumbers.map(function (el) {
  return -el;
})


// التمرين الثالث

let ign = ignoreBooleans.split('').map(function (el) {
  return isNaN(parseInt(el)) ? el : '';
}).join();

console.log(ign);


*/
////////////////////////////////////////////////////

/*
الدرس الثالث :

filter
بيعمل مصفوفة جديدة تحتوي على العناصر التي تتجاوز الاختبار



// get friends with name starts with A
let friends = ["ahmed", "sameh", "sayed", "asmaa", "amjad", "israa"];


// get even numbers only
let numbers = [11, 20, 2, 5, 17, 10];


let filterFriends = friends.filter(function (el) {
  return el.startsWith("a");
});

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(filterFriends);

*/
////////////////////////////////////////////////////

/*
الدرس الرابع:
رح نعمل ميكس بين الفيلتر والماب 
ونحل بعض التمارين



// filter words more than 4 characters


let sentence = "i love foood code too playing much";

let smallWords = sentence.split(" ").filter(function (el) {
  return el.length <= 4;
})
  .join(" ");

console.log(smallWords);

// filter strings + multiply 
let mix = "A13BS2ZX";

let newMix = mix.split('').filter(function (el) {
  return !isNaN(parseInt(el));
}).map(function (el) {
  return el * el;
}).join(", ");

console.log(newMix);

*/

/*
الدرس الخامس :

reduce

بتقبل مني القيم الموجودة تحت بالمثال 
acc هي اول عنصر بالمصفوفة 
لكن في قيمة موجودة بعد ال function مباشرة هي القيمة اذا لم تعينها رح يكون ال acc هو اول عنصر بالمصفوفة 
لكن اذا تم تعيين القيمة الموجودة بعد ال function هي رح تكون القيمة الخاصة بالعنصر acc

  - current هو قمية العنصر الثاني بعد ال acc 
  - index هو نفسه index acc
  - arr هي في المثال نفس المصفوفة التي يتم التطبيق عليها مع جميع عناصرها
  - القيمة الموجودة بعد ال function اختيارية .. وهي قيمة ال acc.


let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
console.log(`acc => ${acc}`);
console.log(`current element => ${current}`);
console.log(`current element index => ${index}`);
console.log(`array => ${arr}`);
console.log(acc + current);
console.log(`###########`);
return acc + current;
}, 5);

console.log(add);

*/


/*
الدرس السادس :
تمارين عن ال reduce and filter



let theBiggest = ["bla", "propaganda", "other", "AAA", "battery", "test"];

let check = theBiggest.reduce(function (acc, current) {
  return acc.length > current.length ? acc : current;
})
console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let finaleString = removeChars.filter(function (el) {
  return !el.startsWith("@");
}).reduce(function (acc, current) {
  return `${acc}${current}`;
})

console.log(finaleString);

*/

/*
الدرس السابع :
forEach
اولا : لا تنشئ مصفوفة جديدة



/*
html
<ul>
        <li class="active">one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    <div class="contact">
        <div>div one</div>
        <div>div two</div>
        <div>div three</div>
    </div>
*/
/*
let allLis = document.querySelectorAll("ul li");
let allDiv = document.querySelectorAll(".contact div");


allLis.forEach(function (el) {
  el.onclick = function () {
    // remove active class from all elements
    allLis.forEach(function (el) {
      el.classList.remove("active");
    });
    // add active class to this element 
    this.classList.add("active");
    // hide all divs
    allDiv.forEach(function (el) {
      el.style.dipslay = "none";
    });
  };
});

console.log(allLis);
*/


// higher order functions challenges
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").filter(function (el) {
  return isNaN(parseInt(el)) && el != "," && el != "_";
}).map(function (el) {
  return el.startsWith(el.toUpperCase()) ? " " + el : el;
}).slice(1, -isNaN(myString)).reduce(function (acc, current) {
  return acc + current;
});

console.log(solution); // Elzero Web School

