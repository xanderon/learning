let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire.`;
        }
    }
}

let lizzard = {
    name: 'Kiki',
    fight() {
        return 1;
    }
}

// bind sing to the this inside lizzard
const singLizard = dragon.sing.bind(lizzard);

console.log(dragon.sing())
console.log(singLizard())

//creating the chain from lizard to dragon
lizzard.__proto__ = dragon;
for (let property in lizzard) {
    //We check only it's own properties
    if (lizzard.hasOwnProperty(property)) {
        console.log(`lizzard own properties: ${property}`);
    } else {
        console.log(`inherited properties: ${property}`);
    }
}
console.log(lizzard.sing()); // The this from dragon now points to the name inside kiki
console.log(lizzard.fight()); // Fight is still 1 as Kiki already has this property
console.log(lizzard.fire); // Inherited property

console.log(dragon.isPrototypeOf(lizzard)); //dragon is prototype of lizzard

///

const obj = { name: 'Sally' }
function a() { }
a.hasOwnProperty('call') // false (also bind, apply) <-- inherited properties
a.hasOwnProperty('name') // true

// my function 'a' inherits from base 'Function' and base 'Function' inherits from 'Object'

//__proto__ -> is a pointer to the next in chain prototype {}

//prototype {apply, bind, call, __proto__} <-- prototype of base Function

const array = []
array.hasOwnProperty('map') // false map in up the proto chain
array.__proto__.hasOwnProperty('map') // true
Array.prototype // base Array
array.__proto__ // we get the same thing, this one just points toi the base Array

let human = {
    mortal: true
}

// One way we can inherit from human
let socrates = Object.create(human); // we create a prototype chian up to human
socrates.age = 45;
console.log(`Socrates age ${socrates.age}`)
console.log(`Socrates mortal ${socrates.age}`)
console.log(`Human is prototype of socrates ${human.isPrototypeOf(socrates)}`);

// Only functions have the prototype property (not objects, not arrays)

function mBy5(n) {
    return n * 5;
}
console.log(`Function prototype ${mBy5.prototype}`);

Function.prototype
Array.prototype
Object.prototype // This is the base object// This is the Object Constructor! -> Creates a wrapper
console.log(`Type of Object.prototype: ${typeof Object}`)

const objTest = {} // JS uses Object constructor to create the 'object' 

//#Ex1
//new Date('1900-10-10').lastYear();
Date.prototype.lastYear = function () {
    return +this.getFullYear() - 1;
}
console.log(`Last Year: ${new Date('1900-10-10').lastYear()}`);
//1899

//#x2 modify map to print '🗺' at the end of each iteration
Array.prototype.map = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(`${this[i]}🗺`);
    }
    return arr;
}
console.log([1, 2, 3].map())
//1🗺, 2🗺, 3🗺