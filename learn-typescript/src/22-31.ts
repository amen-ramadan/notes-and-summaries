// /*
//   Interface
//   - Interface Declaration
//   --- Serve Like Types
//   --- The Interface Describes The Shape Of An Object
//   --- It Defines The Syntax To Follow

//   --- Use With Object
//   --- Use With Function
//   --- Use Read Only And Optional Operator
// */

// interface User {
//   id?: number,
//   readonly username: string,
//   country: string
// }

// let user: User = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt"
// }

// user.country = "Syria";

// console.log(user);

// function getData(data: User) {
//   console.log(`Id Is ${data.id}`);
//   console.log(`Username Is ${data.username}`);
//   console.log(`Country Is ${data.country}`);
// }

// getData({ id: 200, username: "Osama", country: "KSA" });

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Interface
//   - Interface Method And Parameters
// */

// interface User {
//   id: number;
//   username: string;
//   country: string;
//   sayHello() : string; // normal function
//   sayWelcome: () => string;  // arrow function
//   getDouble(num: number) : number; // how declare parameters in function
// }

// let user: User = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt",
//   sayHello() {
//     return `Hello ${this.username}`;
//   },
//   sayWelcome: () => {
//     return `Welcome ${user.username}`;
//   },
//   getDouble(n) {
//     return n * 2;
//   }
// }

// console.log(user.id);
// console.log(user.sayHello());
// console.log(user.sayWelcome());
// console.log(user.getDouble(100));

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Interface
//   - ReOpen The Interface And Use Cases
// */

// // Homepage
// interface Settings {
//   readonly theme: boolean;
//   font: string;
// }

// // Articles Page
// interface Settings {
//   sidebar: boolean;
// }

// // Contact Page
// interface Settings {
//   external: boolean;
// }

// let userSettings: Settings = {
//   theme: true,
//   font: "Open Sans",
//   sidebar: false,
//   external: true
// }

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Interface
//   - Extending Interfaces
// */

// interface User {
//   id: number;
//   username: string;
//   country: string;
// }

// interface Moderator {
//   role: string | number;
// }

// interface Admin extends User,Moderator {
//   protect?: boolean;
// }

// let user: Admin = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt",
//   role: "Mod",
//   protect: true
// }

// console.log(user.id);

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Interface
//   - Interface vs Type Aliases
//   - Take A Look On HTMLElement Interface
// */

// let el = document.getElementById("id") as HTMLElement;

// // Homepage
// type Settings = {
//   readonly theme: boolean;
//   font: string;
//   sidebar: boolean;
//   external: boolean;
// }

// let userSettings: Settings = {
//   theme: true,
//   font: "Open Sans",
//   sidebar: false,
//   external: true
// }

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Type Annotations With Class
// */

// class User {
//   u: string;
//   s: number;
//   msg: () => string;
//   constructor(username: string, salary: number) {
//     this.u = username;
//     this.s = salary;
//     this.msg = function () {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
// }

// let userOne = new User("Elzero", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Class
//   - Data Access Modifiers & Parameters Properties
//   --- Public
//   ------ All Members Of A Class In TypeScript Are Public
//   ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
//   --- Private
//   ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
//   --- Protected
//   ------ Same Like Private But Can Be Accessed Using The Deriving Class

//   - TypeScript Is A Layer On Top Of JavaScript
//   - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
// */

// class User {
//   msg: () => string;
//   constructor(private username: string, protected salary: number,public readonly address: string) {
//     this.msg = function () {
//       return `Hello ${this.username} Your Salary Is ${this.salary}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this.username} Your Salary Is ${this.salary}`;
//   }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// // console.log(userOne.username);
// // console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Class
//   - Get And Set Accessors
// */

// class User {
//   public get username(): string {
//     return this._username;
//   }
//   public set username(value: string) {
//     this._username = value;
//   }
//   msg: () => string;
//   constructor(private _username: string, public salary: number, public readonly address: string) {
//     this.msg = function () {
//       return `Hello ${this._username} Your Salary Is ${this.salary}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this._username} Your Salary Is ${this.salary}`;
//   }
//   // get username() : string {
//   //   return this._username;
//   // }
//   // set username(value: string) {
//   //   this._username = value;
//   // }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// console.log(userOne.username);
// userOne.username = "Ahmed";
// console.log(userOne.username);
// console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


// /*
//   Class
//   - Static Members
//   --- Don't Use "name, length, call"
// */

// class User {
//   private static created: number = 0;
//   static getCount() : void {
//     console.log(`${this.created} Objects Created`);
//   }
//   constructor(public username: string) {
//     User.created++;
//   }
// }

// let u1 = new User("Elzero");
// let u2 = new User("Web");
// let u3 = new User("School");
// // console.log(User.created);
// User.getCount();


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Class
//   - Implement Interface
// */

// interface Settings {
//   theme: boolean;
//   font: string;
//   save(): void;
// }

// class User implements Settings {
//   constructor(public username: string, public theme: boolean, public font: string) {}
//   save(): void {
//     console.log(`Saved`);
//   }
//   update(): void {
//     console.log(`Updated`);
//   }
// }

// let userOne = new User("Elzero", true, "Open Sans");

// console.log(userOne.username);
// console.log(userOne.font);

// userOne.save();
// userOne.update();

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


// // التكليف 01
// // لدينا Interface بإسم Member يمكنك التعديل عليه كما تريد
// // قم بالتعديل على ال Interface لتنتهي رسائل الخطأ الموجودة في ال Object بالأسفل
// // ممنوع التعديل عى ال Object ولا السطور الموجودة تحته
// // لديك 4 أخطاء كل واحد فيه التعليق الذي يعبر عنه



// // Edit The Interface To Fix The Problems
// interface Member {
//   id: number|string;
//   username: string;
//   country?: string;
//   state: boolean;
//   getName(): string;
// }

// // Do Not Edit The Code Below
// let user: Member = { // Property 'country' is missing in type
//   id: 100,
//   username: "Elzero",
//   state: true,
//   getName() { // 'getName' does not exist in type 'Member'
//     return this.username;
//   }
// }

// user.id = 200;
// user.id = "200"; // Type 'string' is not assignable to type 'number'
// user.state = false; // Cannot assign to 'state' because it is a read-only property

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// // التكليف 02
// // لدينا ال Object التالي لا تقم بالتعديل عليه
// // قم بإنشاء ال Interface لنطبع بيانات ال Object بنجاح

// // Create Interface Here
// interface Client {
//   id:number;
//   username:string;
//   active:boolean;
//   discount:number;
//   getPrice(p:number):number;
// }

// // Do Not Edit The Code Below
// let client: Client = {
//   id: 100,
//   username: "Elzero",
//   active: true,
//   discount: 10,
//   getPrice(price: number) {
//     return price - this.discount;
//   }
// }

// console.log(`Client Id Is ${client.id}`);
// console.log(`Client Name Is ${client.username}`);
// console.log(`Client Has Dicount ${client.discount}`);
// console.log(`Client Product After Discount Is ${client.getPrice(200)}`);


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// // التكليف 03
// // لدينا ال Object التالي لا تقم بالتعديل عليه
// // لدينا أيضا إثنين Interfaces لا تقم بالتعديل عليهم
// // إستخدم ما تعلمته مع عدم تكرار الخواص الموجودة داخل ال Interface لتجعل ال Object جاهز لطباعة محتواه


// // Do Not Edit The Code Below
// interface Man {
//   title: string;
//   weight: number;
//   age: number;
// }

// interface Bird {
//   canFly: boolean;
// }

// interface Superman extends Bird, Man {
//   bodyType: string;
//   origin: string;
// }

// let creature: Superman = {
//   title: "Superman",
//   weight: 100,
//   age: 500,
//   canFly: true,
//   bodyType: "Iron",
//   origin: "Krypton"
// }

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// // التكليف 04
// // لديك ال Objects التالية ونحتاج لإنشاء ال Class الذي ينشيء هذه ال Objects
// // يجب إستعمال ال Type Annotations مع ال Class Members
// // ممنوع نهائيا إستخدام ال Any Type


// // Create Class Here
// class Player {
//   public n: string;
//   public type: string;
//   public level: string|number;
//   public vip: boolean;
//   constructor(name:string, type:string,level: string|number,vip:boolean=false){
//     this.n = name;
//     this.type = type;
//     this.level = level;
//     this.vip = vip;
//   }
//   details(): string {
//     if (this.vip) {
//       return `VIP ${this.n}, Type Is ${this.type} Level Is ${this.level}`;
//     }
//     return `${this.n}, Type Is ${this.type} Level Is ${this.level}`;
//   }
// }

// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// // التكليف 05
// // لديك ال Class التالي
// // نريد إختصار ال Code تماما


// class Shorten {
//   constructor (public id: number, public username: string,public title: string) {
//   }
// }

// let tester = new Shorten(100, "Elzero", "Developer");

// console.log(tester.id);
// console.log(tester.username);

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// // التكليف 06
// // لديك ال Class التالي
// // نريد تصليح الأخطاء وطباعة القيمة الخاصة بال Title بدون تغيير حالة ال Private الموجودة في ال Class Member

// class Show {
//   public get title(): string {
//         return this._title;
//       }
//       public set title(value: string) {
//         this._title = value;
//       }
//   constructor (private _title: string) {
//     // this.title= _title;
//   }
// }

// let tester = new Show("Elzero");

// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// // التكليف 07
// // لديك ال Interface التالي
// // قم بإنشاء Class يقوم بعمل Implement لهذا ال Interface
// // مع ضمان ظهور البيانات كما في التعليق

// interface Play {
//   id: number;
//   title: string;
//   level: number | string;
//   logIn(): void;
//   logOut(msg: string): void;
// }

// // Create Your Class Here
// class Player implements Player {
//   constructor(public id:number, public title:string, public level:number){}
//   logIn():void {
//     return  console.log("looghfjd")
//   }
//   logOut(s:string):void {
//     return   console.log(`logged out, ${s}`)
//   }
// }

// let player1 = new Player(100, "Elzero", 95);

// console.log(player1.id); // 100
// console.log(player1.title); // "Elzero"
// console.log(player1.level); // 95
// player1.logIn(); // Logged In
// player1.logOut("Good Bye"); // Logged Out, Good Bye

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
