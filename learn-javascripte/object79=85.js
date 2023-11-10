/* 
الدرس الأول :



let user = {
  // properties
  theName: "amen",
  theAge: 25,
  // Methods
  sayHello: function () {
    return `hello`;
  }
}

console.log(user);
console.log(user.theAge);
console.log(user.theName);
*/

/*
object 
  - dot notation vs bracket notation
  - dynamic property name 
  
  let myVar = "country"
let user = {
  theName: "osama",
  "country": "egybt",
}

console.log(user.theName);
console.log(user["country"]);
console.log(user.myVar); // undefinde
console.log(user[myVar]); // هيك مزبوط

الاقواس بتقدر تحدد البروبرتي  الدايناميك 
بس الدوت ما بتقدر توصل للقيمة الموجودة داخلو

*/

/*
الدرس الثالث :
object
  - Nested object and trainings


  let user = {
    name: "amen",
  age: "24",
  skills: ["html", "css", "js"],
  available: false,
  addresses: {
    ksa: "riyadh",
    egybt: {
      one: "cairo",
      two: "giza",
    },
  },
  chickAv: function () {
    if (user.available === true) {
      return `free for work`;
    }
    else {
      return `not free`;
    }
  },
}

*/

/*
الدرس الرابع :

let user = {};

console.log(user);

// use add dot notation
user.Age = 25;
console.log(user);

// add kirl press
user["country"] = "syria"
console.log(user);

// add methods 
user.sayHello = function () {
  return `hello`
}
console.log(user);

// الطريقة الثانية لانشاء ال object

let user = new Object ({
  age: 20,
});
*/

/*
الدرس السادس :
*/



// بتنسخ الاوبجيكت وبيعمل كونكاتينيت بين الاوبجيكتس
// let newObject = Object.assign(
  // هون بياخد منك الاوبجيكت يلي بدك تنسخ عليها واذا ما عندك بتحطاو قوسين معكوفين{} 
  //, هون بياخد منك الأوبجيكت يلي بدك تنسخها 
  //, وبيقبل منك اكتر من اوبجيكت لتنسخ منها )
