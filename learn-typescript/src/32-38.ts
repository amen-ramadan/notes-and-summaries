// /*
//   Class
//   - Abstract Classes And Members
//   --- We Cannot Create An Instance Of An Abstract Class
// */

// abstract class Food {
//   constructor(public title: string) {}
//   abstract getCookingTime() : void;
// }

// class Pizza extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime() : void {
//     console.log(`Cooking Time For Pizza Is 1 Hour`);
//   }
// }

// class Burger extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime() : void {
//     console.log(`Cooking Time For Burger Is Half Hour`);
//   }
// }

// let pizzaOne = new Pizza("Awesome Pizza", 100);

// console.log(pizzaOne.title);
// console.log(pizzaOne.price);
// pizzaOne.getCookingTime();

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Class
//   - Polymorphism & Method Override

//   - Polymorphism
//   --- Classes Have The Same Methods But Different Implementations

//   - Method Override
//   --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
//   --- A Method In Child Class Must Have Same Name As Parent Class

//   --- noImplicitOverride
// */

// class Player {
//   constructor(public name: string) {}
//   attack() : void {
//     console.log("Attacking Now");
//   }
// }

// class Amazon extends Player {
//   constructor(name: string, public spears: number) {
//     super(name);
//   }
//   override attack(): void {
//     // super.attack();
//     console.log("Attacking With Spear");
//     this.spears -= 1;
//   }
// }

// class Barbarian extends Player {
//   constructor(name: string, public axeDurability: number) {
//     super(name);
//   }
//   override attack(): void {
//     // super.attack();
//     console.log("Attacking With Axe");
//     this.axeDurability -= 1;
//   }
// }

// let barOne = new Barbarian("Elzero", 100);

// console.log(barOne.name);
// barOne.attack();
// console.log(barOne.axeDurability);

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Generics
//   - Help Write A Reusable Code
//   - Allow To Pass Type As A Parameter To Another Type
//   - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
//   - We Can Create:
//   --- Generic Classes
//   --- Generic Functions
//   --- Generic Methods
//   --- Generic Interfaces
// */

// function returnNumber(val: number) : number {
//   return val;
// }
// function returnString(val: string) : string {
//   return val;
// }
// function returnBoolean(val: boolean) : boolean {
//   return val;
// }

// console.log(returnNumber(100));
// console.log(returnString("Elzero"));
// console.log(returnBoolean(true));

// function returnType<T>(val: T) : T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));
// console.log(returnType<boolean>(true));
// console.log(returnType<number[]>([1, 2, 3, 4]));

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Generics
//   - Arrow Function
//   - Multiple Types
//   - Discussion
// */

// function returnType<T>(val: T): T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));

// const returnTypeArrowSyntax = <T>(val: T): T => val;

// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Elzero"));

// function testType<T>(val: T): string {
//   return `The Value Is ${val} And Type Is ${typeof val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("Elzero"));

// function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
//   return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
// }

// console.log(multipleTypes<string, number>("Osama", 100));
// console.log(multipleTypes<string, boolean>("Elzero", true));


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Generics
//   - Classes
// */

// class User<T = string> {
//   constructor(public value: T) {}
//   show(msg: T) : void {
//     console.log(`${msg} - ${this.value}`);
//   }
// }

// let userOne = new User<string>("Elzero");
// console.log(userOne.value);
// userOne.show("Message");

// let userTwo = new User<number | string>(100);
// console.log(userTwo.value);
// userTwo.show("Message");

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Generics
//   - Classes And Interfaces
// */

// interface Book {
//   itemType: string;
//   title: string;
//   isbn: number;
// }

// interface Game {
//   itemType: string;
//   title: string;
//   style: string;
//   price: number;
// }

// class Collection<T> {
//   public data: T[] = [];
//   add(item: T) : void {
//     this.data.push(item);
//   }
// }

// let itemOne = new Collection<Book>();
// itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
// itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
// console.log(itemOne);

// let itemTwo = new Collection<Game>();
// itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
// console.log(itemTwo);

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// // التكليف 01
// // لديك Abstract Class و Two Classes فيهم بعض المشاكل تحتاج للتعديل عليهم يتختفي الأخطاء
// // ممنوع إستخدام ال override Keyword


// // Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }

// // Start Edit And Fix
// class RPG extends Game {
//   constructor(title: string, price: numandstring, public rate: number) {
//     super(title,  price);
//   }
//   getLocation(): string { return `location`;}
//   getDiscount(): string { return `Discount`;}
// }

// class Action extends Game {
//   constructor(title: string,  price: numandstring, public rate: number, public company: string) {
//     super(title,  price);
//   }
//   getLocation(): string { return `location`;}
//   getDiscount(): string { return `Discount`;}
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// // التكليف 02
// // لديك مجموعة من السطور تطبع قيم في ال Console
// // قم بكتابة ال Function لتعمل هذه السطور بدون أي مشكلة ويخرج ال Output كما في التعليقات

// // Write Function Code Here


// // function showTypes<T= "Nothing",S= "Nothing",M= "Nothing">(val1?:T,val2?:S,val3?:M): string  {return ` ${ val1} - ${ val2} - ${ val3} `}



// function showTypes<T = "Nothing", S = "Nothing", M = "Nothing">(val1?: T, val2?: S, val3?: M): string {
//   const value1 = val1 !== undefined ? typeof val1 : "Nothing";
//   const value2 = val2 !== undefined ? typeof val2 : "Nothing";
//   const value3 = val3 !== undefined ? typeof val3 : "Nothing";
//   return `${value1} - ${value2} - ${value3}`;
// }

// // Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - number - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - number - boolean

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


// // التكليف 03
// // لديك مجموعة من السطور تطبع قيم في ال Console
// // قم بكتابة ال Class لتعمل هذه السطور بدون أي مشكلة ويخرج ال Output 


// // Write Class Code Here

// class Game<T> {
//   constructor(public title: string|number,public price: number) {
    
//   }
//   getDiscount(val:string|number):void {
//     console.log(`The Discount Is ${val}`)
//   }

// }


// // Do Not Edit Here
// let gameOne = new Game<string>("Ys", 100);
// let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// gameOne.getDiscount("50"); // "The Discount Is 50"

// console.log(gameTwo.title); // 2064
// console.log(gameTwo.price); // 100
// gameTwo.getDiscount(80); // "The Discount Is 80"