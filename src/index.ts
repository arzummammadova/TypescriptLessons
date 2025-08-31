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

//ders2
let numbers: number[] = [1, 2, 3, 4, 5]
console.log(numbers)


let strings: string[] = ["Arzu", "Ayla"]
console.log(strings)


let example: number[] = [1, 4, 5, 9];
let example2: Array<number> = [1, 3, 8]
console.log(example2)


let user: { name: string, surname: string, isAdmin: true, age: number } = {
    name: "Arzu",
    surname: "Mammadova",
    isAdmin: true,
    age: 20,

}

interface User {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
}

let newUser: User = {
    id: 1,
    username: "arzu",
    email: "arzu@example.com",
    isActive: true,
};

function sum(a: number, b: number): number {
    return a + b
}



const multiply = (x: number, y: number): number => {
    return x ** y
}

function logUser(user: User): void {
    console.log(`${user.username},${user.email}`)

}


//numbers: number[] və fruits: string[] yarat → konsola çıxar.

let numbers1: number[] = [1, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers1);
let numbers2: Array<number> = [2, 4, 5, 6, 7, 8]
console.log(numbers2)


let fruits: string[] = ["alma", "armud"]
console.log(fruits);

// Book adlı interface yarat:
interface Book {
    id: number,
    title: string,
    author: string;
    isPublished: boolean;
}

let newBook:Book={
    id:2,
    title:"salam",
    author:"slala",
    isPublished:true,
}

const addnumbers=(a:number,b:number):number=>{
    return a+b
}
addnumbers(4,5)

