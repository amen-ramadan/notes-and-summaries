/*   الدرس 57 :

syntax

////////////////////////////////////////
الدرس 58 :

function advanced example

////////////////////////////////////////////////////////
الدرس 59 :

  -return

//////////////////////////////////////////////////////
درس 60 :

default function parameters 

الطرق القديمة لاعطاء قيمة بديلة لل undefined

if (age === undefined) {
  age = "unknown";
}

age = age || "unknown"

///////////////////////////////////////////////////////
الدرس 61 :

function calc(... numbers) {
  let sum = 0;
  for(let i=0 ;i<numbers.length;i++){
    sum += numbers[i]; 
  }
  return `final result is ${result}`;
}

console.log(calc(10, 20, 30));

////////////////////////////////////////////////////////////

الدرس 62 :

function advanced practice


function showInfo(us= "un", ag= "un", rt= 0,show= 'yes', ...sk) {
  document.write(`<div>`);
  document.write(`<h2>welcome ${us}</h2>`);
  document.write(`<p>age: ${ag}<p>`);
  document.write(`<p>hour rate: ${rt}<p>`);
  if (show === "yes") {
    if (sk.length > 0) {
      document.write(`<p>skills: ${sk.join(" | ")}</p>`)
    }
    else {
      document.write(`<p>skills: no skills</p>`)

    }
  } else {
    document.write(`<p>skills is hidden</p>`)

  }
  document.write(`</div>`);
}

showInfo("osama", 38, 20, "no", "html", "css");
*/

//  الدرس 63 :  تحدي

// function showDetails(st, ag, bo) {
//   if (typeof st === "number") {
//     st = ag;
//   }

//   else if (typeof st === "boolean") {
//     st = bo;
//   }

//   else if (typeof st === "string") {
//     st = st;
//   }

//   if (typeof ag === "string") {
//     ag = st;
//   }
//   else if (typeof ag === "boolean") {
//     ag = bo;
//   }
//   else if (typeof ag === "number") {
//     ag = ag;
//   }

//   if (typeof bo === "number") {
//     bo = ag;
//   }
//   else if (typeof bo === "string") {
//     bo = st;
//   }
//   else if (typeof bo === "boolean") {
//     bo = bo;
//   }


//   if (bo === true) {
//     console.log(`"hello ${st} , your age is ${ag}, you are availabel for hire"`)
//   }
//   else {
//     console.log(`"hello ${st} , your age is ${ag}, you are not availabel for hire"`)
//   }
// }

// showDetails("osama", 38, true); // "hello osama , your age is 38, you are availabel for hire"
// showDetails(38, "osama", true); // "hello osama , your age is 38, you are availabel for hire"
// showDetails(true, 38, "osama"); // "hello osama , your age is 38, you are availabel for hire"
// showDetails(false, "osama", 38); // "hello osama , your age is 38, you are not availabel for hire"


function showDetails(st, ag, bo) {
  let name, age, isAvailable;

  if (typeof st === "number") {
    age = st;
  } else if (typeof st === "boolean") {
    isAvailable = st;
  } else if (typeof st === "string") {
    name = st;
  }

  if (typeof ag === "number") {
    age = ag;
  } else if (typeof ag === "boolean") {
    isAvailable = ag;
  } else if (typeof ag === "string") {
    name = ag;
  }

  if (typeof bo === "number") {
    age = bo;
  } else if (typeof bo === "boolean") {
    isAvailable = bo;
  } else if (typeof bo === "string") {
    name = bo;
  }

  if (isAvailable === true) {
    console.log(`"hello ${name} , your age is ${age}, you are availabel for hire"`);
  } else {
    console.log(`"hello ${name} , your age is ${age}, you are not availabel for hire"`);
  }
}

showDetails("osama", 38, true); // "hello osama , your age is 38, you are availabel for hire"
showDetails(38, "osama", true); // "hello osama , your age is 38, you are availabel for hire"
showDetails(true, 38, "osama"); // "hello osama , your age is 38, you are availabel for hire"
showDetails(false, "osama", 38); // "hello osama , your age is 38, you are not availabel for hire"
