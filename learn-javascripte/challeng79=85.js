// التكليف 01
// قم بإنشاء ال Object الذي يتم إستخراج البيانات التالية 

/*
// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `I Live in ${this.country}`;
  }
}


console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
*/

/*
التكليف 02
قم بإنشاء Object جديد بأربع طرق مختلفة
*/


/*
// Method One
// Create Your Object Here

let objMethodOne = {
  property: "Method One"
}

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here


let objMethodTwo = new Object({
  property: "Method two"
})

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here


let objMethodThree = Object.assign({
  property: "method three"
})

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

let objMethodFour = Object.create({
  property: 'Method four'
})

console.log(objMethodFour.property); // "Method Four"
*/

/*
التكليف 03
إستخدم ال Object.assign() لتنشيء Object جديد يحتوي على كل ما سبق
*/


/*
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a: a,}, threeNums, twoNums)

console.log(finalObject);


// a: 1
// b: 2
// c: 3
// d: 4
// e: 5
// f: 6

*/

/*
التكليف 04
تحدي
ال Object الرئيسي يحتوي على Three Nested Objects
متشابهين في كل شيء ماعدا أن واحد منهم لا يحتوي على إصدارات الالعاب
يجب إستعمال Loop For فقط في تكرار العناصر
كل ما عليك هو حل التعليمات وملأ الفراغات لتصل للنتيجة المطلوبة
يجب عدم تغيير بنية ال Code وكل ما عليك كتابة ال Code الخاص بك مكان علامات الإستفهام

*/

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let game = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${game[i]}`);
  console.log(`The Publisher Is ${myFavGames[game[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[game[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  // انا كنت حاتط بالشرط هذا الكود وكان شغال معي بس ما بعرف اذا غلط او لا 
  // if (myFavGames[game[i]].bestThree) 


  if (Object.hasOwn(myFavGames[game[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[game[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[game[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[game[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

