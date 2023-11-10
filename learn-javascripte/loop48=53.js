// الدرس 48 :

// fro syntax: for (let = 0; i < 10; i++) {
//   console.log(i);
// }



// الدرس 49 :
/*let myFriends = [1, 2, "osama", "ahmed", 3, 4, "sayed", "ali"];

let onlyName = [];

for (let i = 0; myFriends.length > 0; i++) {
  if (myFriends[i] === "string") {
    onlyName.push(myFriends[i]);
  }
}

console.log(onlyName);  */

// الدرس 50 :

/* nested loop

الدرس 51: 

loop control :
  - break  اوقف الحلقة
  - continue  اكمل عادي يعني طنشها
  - label  هي تسمية ما قبل اللوب ..
      mainLoop : for (){
        nestedLoop: for(){
          break mainLoop;
          هنا عملنا ستوب للحلقة الرئيسية
        }
      }


الدرس 52 : 

loop for advanced example
فيها عن المنطق البرمجي

الدرس 53 :

مثال عن المنتجات والالوان :


let products = ["keyboard", "mouse", "pen", "pad", "monitor", "iphone"];
let colors = ["red", "green", "blue"];
let showCount = 5;

document.write(`<h1>Show ${showCount} products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3> [${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}


*/

