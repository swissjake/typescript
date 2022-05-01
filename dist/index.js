"use strict";
//Basic Types
let id = 5;
let company = 'Soficode';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hey'];
//Tuple
//it has to be arranged like the types
let person = [1, 'John', false];
//Tuple Array
let employee;
employee = [
    [1, 'John'],
    [2, 'sofi'],
    [3, 'codes']
];
//Unions
let proid;
//it can be number or string
proid = '22';
//ENum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion
let cid = 1;
let customerId = cid;
cid = false;
console.log(cid);
//functions
function addNum(x, y) {
    return x + y;
}
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const sofi = new Person(1, 'Sofiritari');
const sofis = new Person(2, 'Sofiritari');
/////////////////////////////////////////////////////////
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'shawn', 'developer');
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['John', 'hey', 'sofi', 'codes']);
