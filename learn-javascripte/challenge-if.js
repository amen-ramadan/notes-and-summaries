
// var st = "Elzero web school";
// var std = (st.length * 2).toString();

// if (std === "34") {
//     console.log("good");
// };



// if (typeof st.length === "number") {
//     console.log("good");
// };


// if (st.charAt(st.indexOf("w"))=== "w") {
//     console.log("good");
// };

// var num1 = 10;
// var num2 = 20;

// console.log(num1 !== num2); // true
// console.log(num1 != num2); // true
// console.log(num1 < num2); // true
// console.log(num1 <= num2); // true
// console.log(typeof num1 == typeof num2); // true
// console.log(num2 > num1); // true

// console.log("=============================================================================");


// var a = 20;
// var b = 30;
// var c = 10;

// console.log(a < b && a > c || a === b); // true
// console.log(a != b > a > c); // true
// console.log(!(a > b) && !(a >= b) && !(a < c) && !(a <= c)); // true

// console.log("=============================================================================");


// // Test Case 1
// var num = 9;

// if (num < 10) {
//     console.log(`${"00"}${num}`);
// }

console.log("=============================================================================");
console.log("=============================================================================");
console.log("=============================================================================");
console.log("=============================================================================");


// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if(num1 == str) {
//     console.log("{num1} Is The Same Value As {str}");
// }
// if (num1 !== str) {
//     console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// }
// if (typeof str2 !== typeof num1) {
//     console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// }
// if (str != str2) {
//     console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }


// // Output
// // "{num1} Is The Same Value As {str}"
// // "{num1} Is The Same Value As {str} But Not The Same Type"
// // "{num1} Is Not The Same Value Or The Same Type As {str2}"
// // "{str} Is The Same Type As {str2} But Not The Same Value"


// let num1 = 10;
// let num2 = 30;
// let num3 = "30";


// if ((num3 > num1 && num3 !== num2) && (num3 == num2 && num3 !== num2) && (num3 != num1 && num3 !== num2)) {
//     console.log("30 Is Larger Than 10 And Type string Not The Same Type As number30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
// }


// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"















// let job = "designer";
// let salary = 0;

// switch (job) {
//     case "manager":
//         salary = 8000;
//         console.log(salary);
//         break;
//     case "IT":
//     case "support":
//         salary = 6000
//         console.log(salary);
//         break;
//         case "developer","designer":
//             salary = 7000;
//             console.log(salary);
//             break;
// }












// let holidays = 2;
// let money = 0;

// if (holidays === 0) {
//     money = 5000
//     console.log(`my money is ${money}`);
// }
// else if (holidays === 1 || holidays == 2) {
//     money = 3000
//     console.log(`my money is ${money}`);
// }
// else {
//     money = 1000
//     console.log(`my money is ${money}`);
//     }












// // You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"


// let day = "   friday  ";
// day = day.trim()
// day = day.charAt(0).toUpperCase() + day.slice(1);
// console.log(`${day}`);