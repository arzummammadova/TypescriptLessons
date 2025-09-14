// // let num: number = 2;
// // console.log("Number is:", num);

// // let username:string="Arzu"
// // console.log("username is",username)
// // let password:string="2345skkffkfk";
// // console.log("password is",password);
// // let isAdmin:boolean=true;
// // console.log(isAdmin);

// // //number string boolean var any var amma tovsiyye ounur

// // const num1:any=4;
// // console.log(num1)


// // let input:unknown="hello"
// // if(typeof input==="string"){
// //     console.log(input.toLocaleUpperCase())
// // }
// // else{
// //     console.log("rewem deyil")
// // }

// // let num2: number=2;
// // console.log(num2)

// // let num3: void;
// // num3=undefined;
// // console.log(num3)

// // function greet():void{
// //     console.log("salam")
// // }

// // greet();

// // function hi(a:string,b:string):void{
// //     console.log(a+b)
// // }
// // hi( "Salam", " Arzu" )

// // function logMessage(msg: string): void {
// //   console.log("Message:", msg);
// // }
// // logMessage( "Hello, TypeScript!" );

// // function errormessage():never{
// //     throw new Error("this is error")
// // }
// //  errormessage()

// // //  username (string), age (number), isOnline (boolean) dəyişənləri yarat.

// // let username1:string="Jobhn"

// // console.log(username1)
// // let age:number=20
// // console.log(age)
// // const isOnline:boolean=true
// // console.log(isOnline)

// // // any tipli dəyişən yarat → əvvəlcə number, sonra string ver.

// // let datas:any=5
// // console.log(datas)
// // datas="salam"
// // console.log(datas)

// // // unknown tipli dəyişən yarat → typeof ilə yoxla.
// // let forany:unknown=10
// // if(typeof forany==="number"){
// //     console.log(forany)
// // }
// // else{
// //     console.log("not a number")
// // }
// // console.log(forany)

// // // logMessage funksiyası yaz → string qəbul etsin və konsola çıxarsın.
// // function  logMessagee(s:string):void{
// // console.log(s)
// // }
// // logMessagee("salam")
// // // add funksiyası yaz → 2 number alsın və cəmini qaytarsın.


// // function sum(a:number,b:number): number{
// // return(a+b)
// // }
// // sum(2,3)

// // function summ(a: number, b: number): number {
// //     return a + b;
// // }

// // console.log("Sum is:", summ(2, 3)); // Sum is: 5

// // //ders2
// // let numbers: number[] = [1, 2, 3, 4, 5]
// // console.log(numbers)


// // let strings: string[] = ["Arzu", "Ayla"]
// // console.log(strings)


// // let example: number[] = [1, 4, 5, 9];
// // let example2: Array<number> = [1, 3, 8]
// // console.log(example2)


// // let user: { name: string, surname: string, isAdmin: true, age: number } = {
// //     name: "Arzu",
// //     surname: "Mammadova",
// //     isAdmin: true,
// //     age: 20,

// // }

// // interface User {
// //     id: number;
// //     username: string;
// //     email: string;
// //     isActive: boolean;
// // }

// // let newUser: User = {
// //     id: 1,
// //     username: "arzu",
// //     email: "arzu@example.com",
// //     isActive: true,
// // };

// // function sum(a: number, b: number): number {
// //     return a + b
// // }



// // const multiply = (x: number, y: number): number => {
// //     return x ** y
// // }

// // function logUser(user: User): void {
// //     console.log(`${user.username},${user.email}`)

// // }


// // //numbers: number[] və fruits: string[] yarat → konsola çıxar.

// // let numbers1: number[] = [1, 3, 4, 5, 6, 7, 8, 9]
// // console.log(numbers1);
// // let numbers2: Array<number> = [2, 4, 5, 6, 7, 8]
// // console.log(numbers2)


// // let fruits: string[] = ["alma", "armud"]
// // console.log(fruits);

// // // Book adlı interface yarat:
// // interface Book {
// //     id: number,
// //     title: string,
// //     author: string;
// //     isPublished: boolean;
// // }

// // let newBook:Book={
// //     id:2,
// //     title:"salam",
// //     author:"slala",
// //     isPublished:true,
// // }

// // const addnumbers=(a:number,b:number):number=>{
// //     return a+b
// // }
// // addnumbers(4,5)



// //? day -3 
// interface Person {
//   id: number;
//   name: string;
//   age?: number; // optional (olsada olar, olmasada)
// }

// interface Student extends Person {
//   grade: string;
// }

// let student1: Student = {
//   id: 1,
//   name: "Arzu",
//   grade: "A"
// }

// //type alias
// type ID=number| string;
// let userid1=123
// let userid2="name"


// type Book={
//     id:number,
//     year:number,
// }


// type Status="active" | "inactive"|"pending";
// let userStatus="active";
// type A={a:number}
// type B={b:string}
// type AB= A&B
// let obj: AB={a:2,b:"salam"}

// type AddFn = (a: number, b: number) => number;

// const add:AddFn=(x,y)=>x+y;
// console.log(add(2,3));


// // 1. `User` adlı interface yarat:
// //     - `id: number`,
// //     - `username: string`,
// //     - `email: string`,
// //     - `isAdmin?: boolean` (optional).
// // 2. `ResponseStatus` adlı **union type** yarat (`"success" | "error" | "loading"`).
// // 3. `MultiplyFn` adlı function type alias yarat, 2 rəqəmi vurub nəticəni qaytarsın.


// interface User{
//   id:number,
//   username:string,
//   email:string,
//   isAdmin?:boolean
// }

// type ResponseStatus="success"| "error"|"loading"
// type MultiplyFn = (a: number, b: number) => number;

// const multiply: MultiplyFn = (x, y) => {
//   return x * y;
// };


// //day 4


// //union yeni 1 dene deyisen iki type ala bilir
// //meselen
// type id=number| string
// let userId1:id=2033
// let userId2:id="salamei4959i9"




// type Statuss="active"|"deactive"|"pending"

// function showStatus(status:Statuss){
//   console.log(`status is ${status}`);
// }

// showStatus("active")




// type Y={a:number}
// type X={b:number}
// type YX=Y&X
// let object:YX={a:5,b:"3200439"}


// // 1. `ID` üçün union type yaz → həm number, həm string qəbul etsin.
// // 2. `Person` və `Employee` interface-lərini yarat → intersection type ilə `Staff` yarat.
// // 3. `Role` enum yarat → Admin, User, Guest
// // 4. Funksiya yaz → role qəbul etsin və console.log ilə fərqli mesaj göstərsin.



// //day -5 tekrar bugun ve yeni ders
// function greeter(name:string):string{
//   return name;

// }
// greeter("salam")

// //types
// //boolean

// let isActive:boolean=true

// //numbr
// let desc:number=2094034;
// let decimal:number=349039;
// let hex: number = 0xf00d;       // Hexadecimal
// let binary: number = 0b1010;     // Binary
// let octal: number = 0o744;      // Octal
// let float: number = 3.14;      // Floating point


// //string

// let color:string="red"
// let namee:string="Arzu"
// let age:number=20
// let sentence=` my name is ${namee} next year my age will be ${age+1}`;



// //bigint
// // const bigNumber: bigint = 9007199254740991n;
// const array: string[]=["skask","klsei","ewo"]
// array.push("Dylan")

// const arr: readonly number[]=[2,4,5,6,6,7]

// let ourTuple: [number, boolean, string];

// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];


// const cars: {name:string,model:string,year:number}={
//   name:"Porche",
//   model:"gt3 rs",
//   year:2024

// }

// cars.model="911"


// enum userRole{
//   admin="ADMIN",
//   Editor = "EDITOR",
//   Viewer = "VIEWER"

// }

// function checkPermission(role:userRole){
//   if(role===userRole.admin){
//     console.log("hello admin")
//   }
//   else if(role===userRole.Editor){
//     console.log("hello edir");
//   }
//   else{
//     console.log("Viewer");
//   }
// }



// // PaymentStatus yaz: "created" | "processing" | "paid" | "failed". switch ilə render et.

// // BaseUser = { id: ID; name: string } və WithRoles = { roles: Role[] } yaz; User = BaseUser & WithRoles et.

// // enum HttpCode { Ok = 200, NotFound = 404 } yaz və handle(code) funksiyasında fərqli mesaj ver.

// type PaymentStatus="created" | "processing" | "paid" | "failed"

// function showPaymentStatus(status: PaymentStatus) {
//   switch (status) {
//     case "created":
//       console.log("Payment has been created but not started yet.");
//       break;
//     case "processing":
//       console.log("Payment is being processed...");
//       break;
//     case "paid":
//       console.log("Payment completed successfully ✅");
//       break;
//     case "failed":
//       console.log("Payment failed ❌");
//       break;
//     default:
//       // TS burada heç vaxt düşməməlidir
//       const _exhaustive: never = status;
//       return _exhaustive;
//   }
// }

// showPaymentStatus("created");    // Payment has been created but not started yet.
// showPaymentStatus("processing"); // Payment is being processed...
// showPaymentStatus("paid");       // Payment completed successfully ✅
// showPaymentStatus("failed");     // Payment failed ❌



// //BaseUser = { id: ID; name: string } və WithRoles = { roles: Role[] } yaz; User = BaseUser & WithRoles et.



// //tekrar task

// // LoginID adlı union type yaz (string | number).
// // İki dəyişən yarat: biri string, biri number olsun.

// type LoginID=string| number;

// let lid1="3943";
// let lid2=393;


// // Person ({ name: string }) və Employee ({ salary: number }) interface-lərini yarat.


// // Sonra Staff = Person & Employee intersection type yaz və bir obyekt yarat.


// type Personn=({name:string})
// type Employee=({salary:number})
// type Staff=Personn & Employee

// let Staff1:Staff={
//   name:"arzu",
//   salary:2483492,
// }


// // Role enum yaz (Admin, Editor, Viewer).
// // checkRole funksiyası yaz → role görə fərqli mesaj çıxsın.
// enum Role{
//   admin="admin",
//   editor="editor",
//   viewer="viewer"

// }

// // function check(role:Role) {
// //   if(role===Role.admin){
// //     console.log("hi admin")
// //   }  
// //   else if()
// //     //bele gedir
// // }


// //PaymentStatus union type ("created" | "processing" | "paid" | "failed") yaz.
// // renderPayment funksiyası yaz → switch ilə fərqli mesaj ver.
// type PaymentStatus1="created" | "processing" | "paid" | "failed";

// function renderPayment1(payment:PaymentStatus) {
//   switch (payment) {
//     case "created":
//       console.log("payment create");
      
//       break;
//     case "processing":
//       console.log("payment status iscretai");
//   ....
//     default:
//       break;
//   }
  
// }

// // MultiplyFn function type alias yaz → 2 number vurub nəticəni qaytarsın.
// type MultiplyFnn=(a:number,b:number)=>number
// const hasil:MultiplyFn=(x,y)=>x*y
// console.log(hasil(10,3));


// class Dog {
//   bark() {
//     console.log("Hav hav 🐶");
//   }
// }

// class Cat {
//   meow() {
//     console.log("Miyav 🐱");
//   }
// }

// function makeSound(animal: Dog | Cat) {
//   if (animal instanceof Dog) {
//     // burda TypeScript bilir ki, bu Dog-dur
//     animal.bark();
//   } else {
//     // burda isə Cat-dir
//     animal.meow();
//   }
// }

// makeSound(new Dog()); // Hav hav 🐶
// makeSound(new Cat()); // Miyav 🐱


// interface Admin {
//   username: string;
//   permissions: string[];
// }

// interface User {
//   username: string;
// }

// // Bu funksiya TS-yə deyir: əgər true qaytarırsa, deməli "person" = Admin-dir
// function isAdmin(person: User | Admin): person is Admin {
//   return (person as Admin).permissions !== undefined;
// }

// function showPanel(person: User | Admin) {
//   if (isAdmin(person)) {
//     console.log("Admin panel: ", person.permissions);
//   } else {
//     console.log("User panel: ", person.username);
//   }
// }

// let u1: User = { username: "Arzu" };
// let a1: Admin = { username: "Aynur", permissions: ["read", "write"] };

// showPanel(u1); // User panel: Arzu
// showPanel(a1); // Admin panel: ["read","write"]



// //day 6

// function addnumbers(a:number,b:number):number{
//   return a+b
// }

// addnumbers(3,3)

// //? Generic
// //any ile yazmaq menasizdir type secury yoxdur
// //generic ona benziyir amma type secutyvar

// function identity(value:any):any {
//   return value
  
// }

// identity("salam")
// identity(382939)

// // genericdede evveldceden tipi teyin etmirsen
// function identityy<T>(value: T): T {
//   return value;
// }

// let a=identityy<string>("salam")
// let b=identityy<number>(3829)


// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }


// let array7=getFirst<number>([29,903,3903])
// let n = getFirst<number>([10, 20, 30]); // number



// interface ApiResponse<T> {
//   status: number;
//   data: T;
// }


// let userResponse: ApiResponse<{ id: number; name: string }> = {
//   status: 200,
//   data: { id: 1, name: "Arzu" }
// };
// // Divide funksiyası

// // Funksiya: divide(a: number, b: number)

// // Əgər b = 0 olsa, "Cannot divide by zero" return etsin, yoxsa cəmi qaytarsın.

// // // Nümunə çağırışlar:
// // divide(10, 2)  // 5
// // divide(5, 0)   // "Cannot divide by zero"

// function divide(a:number,b:number) {
//   if(b===0){
//     console.log("cannoct devide");
//   }
//   else{
//     return a+b
//   }
  
// }
// divide(10,5)
// divide(5,0)


// // Identity funksiyası (Generic)

// // Funksiya: identity<T>(value: T): T

// // string, number, boolean üçün test et.

// // identity<string>("Salam") // Salam
// // identity<number>(42)      // 42
// // identity<boolean>(true)   // true


// function identiti<T>(value:T):T {
//   return value;
  
// }
// identiti<string>("salam")

// // Get Last Element (Generic)

// // Funksiya: getLastElement<T>(arr: T[]): T

// // Array-in son elementini qaytarsın.

// // getLastElement([1,2,3])        // 3
// // getLastElement(["a","b","c"])  // "c"

// function getLastElement<T>(arr:T[]): T{
//   return arr[arr.length-1];
  
// }
// getLastElement<number>([3,2,4,5,5])






// // real layihələrdə çox istifadə olunan yanaşmadır, məsələn: fetch-dən API response gələndə.

// // 📝 Task: ApiResponse (Generic Interface)
// // 1️⃣ Interface-i qururuq
// // interface ApiResponse<T> {
// //   status: number;
// //   data: T;
// //   message?: string; // optional
// // }

// // 2️⃣ User və Product modelləri
// // interface User {
// //   id: number;
// //   name: string;
// // }

// // interface Product {
// //   id: number;
// //   title: string;
// // }

// // 3️⃣ İstifadə nümunələri
// // // User response
// // const userResponse: ApiResponse<User> = {
// //   status: 200,
// //   data: { id: 1, name: "Arzu" },
// //   message: "User data fetched successfully"
// // };

// // // Product response (array qaytarır)
// // const productResponse: ApiResponse<Product[]> = {
// //   status: 200,
// //   data: [
// //     { id: 1, title: "Laptop" },
// //     { id: 2, title: "Phone" }
// //   ]
// // };

// // 4️⃣ Konsolda yoxlama
// // console.log(userResponse.data.name);     // Arzu
// // console.log(productResponse.data[0].title); // Laptop


// // ✅ Burda ApiResponse<T> generic-dir. T nə verirsən, data o tip olur:

// // User → data: User

// // Product[] → data: Product[]


// //day 7
// // Bu gündə əsas mövzu: Enums və Tuples


// //enum sabitler toplusudur

// enum Role{
//   Admin,
//   User,
//   SuperAdmin

// }

// let myRole:Role=Role.Admin
// if(myRole===Role.Admin){
//   console.log("welcome admin")
// }
// else{
//   console.log("go away")
// }


// enum Status2{
//   loading="loading",
//   success="success",
//   error="error"
// }

// let statu3s:Status2=Status2.error
// console.log(statu3s)



// //tuple

// //array kimidir her type elan edirsen

// const user:[number,string]=[1,"salam"]
// console.log(user[0])
// console.log(user[1])


// type RGB=[number,number,number]
// let color1:RGB=[294,39,0]



// // Role adlı enum yarat → User, Moderator, Admin.
// // Əgər role === Admin olsa, "Welcome Admin" yazdır.

// enum Role1{
//   User,
//   Moderator,
//   Admin
// }

// let role:Role1=Role1.Admin
// if(role===Role1.Admin){
//   console.log("welcome")
// }



// // Status adlı string enum yarat → "SUCCESS", "ERROR", "PENDING".

// // let current: Status = Status.PENDING təyin et və konsola çıxar.

// enum Status3{
//   success="success",
//   error="error",
//   pending="pending"

// }

// let current:Status3=Status3.pending
// console.log(current)

// // UserData tuple yarat → [id: number, username: string, isAdmin: boolean]

// // Nümunə data doldur və hər sahəni konsola çıxar.

// const UserData:[number,string,boolean]=[12029,"arzu",true]

// console.log(UserData[0])



// //type assertion tipi mecbur etmel

// let value:unknown="Hello ts"
// let strlength:number=(value as string).length;
// console.log(strlength)



//🔹 2. Non-null Assertion (!)
// 2. Non-null Assertion (!)

// Bəzən dəyişən null və ya undefined ola bilər, amma biz 100% əminik ki, boş deyil. Onda ! qoyuruq
let btn=document.querySelector(".btn")
//chill  null deyil
btn!.addEventListener("click",()=>{
  alert("salam")
})

// tsc src/index.ts --outDir dist

// ve ya 

// npm init -y

// npm install typescript --save-dev

// npx tsc --init (tsconfig.json yaradacaq)

// Sonra npx tsc ilə .ts fayllarını .js-ə çevirirsən.


//type casting
// inputun value olmasan type castingden isteifade edilir 

let input = document.querySelector("input") as HTMLInputElement;
input.value="salam"

// Day 8 Tasklar

// 1️⃣ Bir dəyişən yarat let data: unknown = "TypeScript";

// Onu string-ə çevir və uzunluğunu (length) consola çıxar.

let data:unknown="typescript"
let datalenght:number=(data as string).length
console.log(datalenght)



// 2️⃣ document.querySelector("h1") götür.

// Non-null assertion (!) istifadə edib innerText-i consola yaz.
let h1=document.querySelector("h1")
h1!.innerHTML="salam"



// 3️⃣ Bir input element götür (querySelector).

// Onu HTMLInputElement-ə cast elə və value-sunu dəyiş.

let inputt=document.querySelector("input") as HTMLInputElement;
inputt.value="salam"



//day 9 utility types

// Partial<Type> hamsinin tipini vermesende olar

// Bütün field-ləri optional edir.

interface User{
  name:string,
  age:number
}

let user1:Partial <User>={
  name:"Arzu"
}

//required butun fieldleri mecbur edir

let user2:Required<User>={
  name:"Arzu",
  age:3940
}

//readlonly deyismez edir

interface Config{
  host:string,
  port:number,

}
const config:Readonly<Config>={
  host:"localhost",
  port:3000


}

//gelsem burda 
// config.host="127.0.0" error


//? pick secir mueyyen field
interface Product{
  id:number,
  name:string,
  type:string,
  size:string,
  price:number
}

let p1: Pick<Product, "id" | "name"> = {
  id: 1,
  name: "Laptop",
};

//omit types
//pick tersi dir cixartmaq ucun istifade olunur
// let p2:Omit<Product,"price"|"size">={
//   type:"comp"
// ...
// }