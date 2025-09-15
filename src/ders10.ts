//intersection AND

interface Person{
    name:string
}

interface Member{
    id:number,
    role:string
}

type NewMember=Person & Member

let newmem:NewMember={
    name:"Arzu",
    role:"It",
    id:3849
}


// Union Or |

type id=number | string

let userId:id=340903
let userId2:id="jekjkje"


//union type yoxlamaq ile 

function printId(id:number|string) {
    if(typeof(id)==="number"){
        console.log(id.toFixed(2))

    }
    else{
        id.toLocaleUpperCase()
    }
    
}



//intersectionve union birlikde
interface User{
  username:string

}


interface Admin{
    role:"admin",
    permission:string[]


}

type UserorAdmin=User|Admin
type SuperAdmin = User & Admin;
let u1: UserOrAdmin = { username: "Nigar" };
let u2: UserOrAdmin = { role: "admin", permissions: ["delete"] };

let superAdmin: SuperAdmin = {
  username: "Arzu",
  role: "admin",
  permissions: ["all"],
};
