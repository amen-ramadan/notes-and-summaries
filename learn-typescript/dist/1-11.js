"use strict";
function printInConsole(...a) {
    for (let i = 0; i < a.length; i++) {
        console.log(`the Value Is ${a[i]} And Type Is ${typeof a[i]}`);
    }
    return `done`;
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=1-11.js.map