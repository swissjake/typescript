//Basic Types
let id: number = 5
let company: string = 'Soficode'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'hey']



//Tuple
//it has to be arranged like the types
let person: [number, string, boolean] = [1, 'John', false]

//Tuple Array
let employee: [number, string][]
employee = [
    [1, 'John'],
    [2, 'sofi'],
    [3, 'codes']
]


//Unions
let proid: string | number
//it can be number or string
proid = '22'

//ENum
enum Direction1{
    up,
    down,
    left,
    right,
}

enum Direction2{
    up ='up',
    down = 'down',
    left = 'left',
    right ='right',
}


//Objects

//EITHER THIS WAY OR THE ONE BELOW
// const user: {
//     id: number
//     name: string
// } ={
//      id: 1,
//     name: 'john'
// }

//This

type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'John'
}


//Type Assertion
let cid: any = 1
let customerId = cid as number
cid = false
console.log(cid)


//functions
function addNum(x: number, y:number): number{
    return x + y
}

//Void
function log(message: number | string): void{
    console.log(message)
}

//Interfaces
interface UserInterface{
    id: number,
    name: string,
    age?: number //optional if there is no number or there is 
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

//Math Func

interface MathFunc {
    (x: number, y:number,):number
}

const add: MathFunc = (x:number, y: number):number => x + y
const sub: MathFunc = (x:number, y: number):number => x - y


//classes & //Using interfaces with classes


interface PersonInterface{
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    id:number
    name: string

constructor(id: number, name: string){
    this.id = id;
    this.name = name;
}
register(){
    return `${this.name} is now registered`
}
}
    const sofi = new Person(1, 'Sofiritari')
    const sofis = new Person(2, 'Sofiritari')

/////////////////////////////////////////////////////////
    class Employee extends Person{
        position: string

        constructor(id: number, name: string, position: string){
                super(id, name)
                this.position = position;
        }
    }
    const emp = new Employee(3, 'shawn', 'developer')


    //Generics
    function getArray<T>(items: T[]): T[]{
            return new Array().concat(items)
    }

    let numArray = getArray<number>([1,2,3,4])
    let strArray = getArray<string>(['John', 'hey', 'sofi', 'codes'])