// let num: number = 2;
// console.log("Number is:", num);

// let username:string="Arzu"
// console.log("username is",username)
// let password:string="2345skkffkfk";
// console.log("password is",password);
// let isAdmin:boolean=true;
// console.log(isAdmin);

// //number string boolean var any var amma tovsiyye ounur

// const num1:any=4;
// console.log(num1)


// let input:unknown="hello"
// if(typeof input==="string"){
//     console.log(input.toLocaleUpperCase())
// }
// else{
//     console.log("rewem deyil")
// }

// let num2: number=2;
// console.log(num2)

// let num3: void;
// num3=undefined;
// console.log(num3)

// function greet():void{
//     console.log("salam")
// }

// greet();

// function hi(a:string,b:string):void{
//     console.log(a+b)
// }
// hi( "Salam", " Arzu" )

// function logMessage(msg: string): void {
//   console.log("Message:", msg);
// }
// logMessage( "Hello, TypeScript!" );

// function errormessage():never{
//     throw new Error("this is error")
// }
//  errormessage()

// //  username (string), age (number), isOnline (boolean) dəyişənləri yarat.

// let username1:string="Jobhn"

// console.log(username1)
// let age:number=20
// console.log(age)
// const isOnline:boolean=true
// console.log(isOnline)

// // any tipli dəyişən yarat → əvvəlcə number, sonra string ver.

// let datas:any=5
// console.log(datas)
// datas="salam"
// console.log(datas)

// // unknown tipli dəyişən yarat → typeof ilə yoxla.
// let forany:unknown=10
// if(typeof forany==="number"){
//     console.log(forany)
// }
// else{
//     console.log("not a number")
// }
// console.log(forany)

// // logMessage funksiyası yaz → string qəbul etsin və konsola çıxarsın.
// function  logMessagee(s:string):void{
// console.log(s)
// }
// logMessagee("salam")
// // add funksiyası yaz → 2 number alsın və cəmini qaytarsın.


// function sum(a:number,b:number): number{
// return(a+b)
// }
// sum(2,3)

// function summ(a: number, b: number): number {
//     return a + b;
// }

// console.log("Sum is:", summ(2, 3)); // Sum is: 5

// //ders2
// let numbers: number[] = [1, 2, 3, 4, 5]
// console.log(numbers)


// let strings: string[] = ["Arzu", "Ayla"]
// console.log(strings)


// let example: number[] = [1, 4, 5, 9];
// let example2: Array<number> = [1, 3, 8]
// console.log(example2)


// let user: { name: string, surname: string, isAdmin: true, age: number } = {
//     name: "Arzu",
//     surname: "Mammadova",
//     isAdmin: true,
//     age: 20,

// }

// interface User {
//     id: number;
//     username: string;
//     email: string;
//     isActive: boolean;
// }

// let newUser: User = {
//     id: 1,
//     username: "arzu",
//     email: "arzu@example.com",
//     isActive: true,
// };

// function sum(a: number, b: number): number {
//     return a + b
// }



// const multiply = (x: number, y: number): number => {
//     return x ** y
// }

// function logUser(user: User): void {
//     console.log(`${user.username},${user.email}`)

// }


// //numbers: number[] və fruits: string[] yarat → konsola çıxar.

// let numbers1: number[] = [1, 3, 4, 5, 6, 7, 8, 9]
// console.log(numbers1);
// let numbers2: Array<number> = [2, 4, 5, 6, 7, 8]
// console.log(numbers2)


// let fruits: string[] = ["alma", "armud"]
// console.log(fruits);

// // Book adlı interface yarat:
// interface Book {
//     id: number,
//     title: string,
//     author: string;
//     isPublished: boolean;
// }

// let newBook:Book={
//     id:2,
//     title:"salam",
//     author:"slala",
//     isPublished:true,
// }

// const addnumbers=(a:number,b:number):number=>{
//     return a+b
// }
// addnumbers(4,5)



//? day -3 
interface Person {
  id: number;
  name: string;
  age?: number; // optional (olsada olar, olmasada)
}

interface Student extends Person {
  grade: string;
}

let student1: Student = {
  id: 1,
  name: "Arzu",
  grade: "A"
}

//type alias
type ID=number| string;
let userid1=123
let userid2="name"


type Book={
    id:number,
    year:number,
}


type Status="active" | "inactive"|"pending";
let userStatus="active";
type A={a:number}
type B={b:string}
type AB= A&B
let obj: AB={a:2,b:"salam"}

type AddFn = (a: number, b: number) => number;

const add:AddFn=(x,y)=>x+y;
console.log(add(2,3));


// 1. `User` adlı interface yarat:
//     - `id: number`,
//     - `username: string`,
//     - `email: string`,
//     - `isAdmin?: boolean` (optional).
// 2. `ResponseStatus` adlı **union type** yarat (`"success" | "error" | "loading"`).
// 3. `MultiplyFn` adlı function type alias yarat, 2 rəqəmi vurub nəticəni qaytarsın.


interface User{
  id:number,
  username:string,
  email:string,
  isAdmin?:boolean
}

type ResponseStatus="success"| "error"|"loading"
type MultiplyFn = (a: number, b: number) => number;

const multiply: MultiplyFn = (x, y) => {
  return x * y;
};


//day 4


//union yeni 1 dene deyisen iki type ala bilir
//meselen
type id=number| string
let userId1:id=2033
let userId2:id="salamei4959i9"




type Statuss="active"|"deactive"|"pending"

function showStatus(status:Statuss){
  console.log(`status is ${status}`);
}

showStatus("active")




type Y={a:number}
type X={b:number}
type YX=Y&X
let object:YX={a:5,b:"3200439"}


// 1. `ID` üçün union type yaz → həm number, həm string qəbul etsin.
// 2. `Person` və `Employee` interface-lərini yarat → intersection type ilə `Staff` yarat.
// 3. `Role` enum yarat → Admin, User, Guest
// 4. Funksiya yaz → role qəbul etsin və console.log ilə fərqli mesaj göstərsin.



//day -5 tekrar bugun ve yeni ders
function greeter(name:string):string{
  return name;

}
greeter("salam")

//types
//boolean

let isActive:boolean=true

//numbr
let desc:number=2094034;
let decimal:number=349039;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point


//string

let color:string="red"
let namee:string="Arzu"
let age:number=20
let sentence=` my name is ${namee} next year my age will be ${age+1}`;



//bigint
// const bigNumber: bigint = 9007199254740991n;
const array: string[]=["skask","klsei","ewo"]
array.push("Dylan")

const arr: readonly number[]=[2,4,5,6,6,7]

let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];


const cars: {name:string,model:string,year:number}={
  name:"Porche",
  model:"gt3 rs",
  year:2024

}

cars.model="911"


enum userRole{
  admin="ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"

}

function checkPermission(role:userRole){
  if(role===userRole.admin){
    console.log("hello admin")
  }
  else if(role===userRole.Editor){
    console.log("hello edir");
  }
  else{
    console.log("Viewer");
  }
}