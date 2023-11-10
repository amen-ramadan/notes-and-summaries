// data types intro

document.write('<h1>Elzero</h1>');
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.fontSize = '40px';
document.querySelector('h1').style.fontWeight = 'bold';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontFamily = "Arial";

console.log("%celzero %cweb %cschool", "color:red; font-size:40px", "color:green; font-size:40px", "background-color:blue; font-size:40px");


console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
console.group("Group Title");
console.log("Message 1");
console.log("Message 2");
console.group("Group Title");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();


let x= "Elzero", y="web school", z="25/10";

let divContains = `
<div class="card">
    <h3>${x}</h3>
    <p>${y}</p>
    <span>${z}</span>
</div>
`;

let modeRepeat = divContains.repeat(4);
document.write(modeRepeat);


// 1 => 9
/*//////////////////////////////////////////////////////////////*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

// Add Variables Here
numberOne = 10;
numberTwo = 20;


// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof(numberOne) + typeof(numberTwo)); // Normal Concatenate => String
console.log(numberOne + "" + numberTwo); // Template Literals Way => 1020
console.log(typeof(numberOne), typeof(numberTwo)); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
Normal Concatenate
20
10
*/

console.log(`${numberOne} 
${numberTwo}`);
/*
Template Literals Way
20
10
*/

console.log("elzero".innerHTML); // object
console.log(typeof elzero); // object

//////////////////////////////////////////////////////////////////////////*/
//////////////////////////////////////////////////////////////////////////*/
// number challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//find smallest
console.log(Math.min(a, b, c, d));

//10000

console.log(Math.pow(a, Math.round(d)));

//get integer '2' from d variable with 4 methods

console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(Math.trunc(d));

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

let  g = "Elzero Web School";

console.log(g.charAt(2).toUpperCase() + g.slice(3, 6));

console.log(g.slice(13, 14).repeat(8).toUpperCase());

console.log(g.split(" ", 1));

console.log(g.substring(0, 7) + g.substring(11));

console.log(g.toUpperCase().toLowerCase(g.length-1));
                            
console.log(g.toUpperCase().toLowerCase() + g.charAt(g.length - 1).toLowerCase());




let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

console.log(Math.floor(Math.random() * 10) +1);

let day = 5;

