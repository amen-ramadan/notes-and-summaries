/* 
الدرس 54

while (index > products.length) {
  console.log(products[index])
  index += 1
}



الدرس 55 :

الحلقة do while تقوم بعمل الكود مرة واحدة اقل مرة

do {
  console.log(i);
  i++
} while(false)
*/

// الدرس 56 : شالنج

let myAdmins = ["Ahmed", "Osama", "Sayed", 'Stop', 'Samera'];
let myEmployees = ['Amgad', 'Samah', 'Ameer', 'Omar', 'Othman', 'Amany', 'Samia'];
let numEmployees = 1;

if (myAdmins.includes('Stop')) {
  myAdmins.length = myAdmins.indexOf('Stop');
}

document.write(`<div>we have ${myAdmins.length} admins </div>
<hr>`)

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<div>the admin for team ${i + 1} is ${myAdmins[i]}
  <h3>Team Members:</h3>
  `);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].charAt(0) === myAdmins[i].charAt(0)) {
      document.write(`<p>- ${numEmployees} ${myEmployees[j]}</p>`);
      numEmployees++;
    }
  }
  numEmployees = 1
  document.write(`</div><hr>`)
}