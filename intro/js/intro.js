function sum(a, b) {
    return a + b
}

let res = sum(1, 2);
console.log(res);


const fsum = sum;
res = fsum(5, 6);
console.log(res);

function operation(fn, a, b) { // funcion de orden superior
    console.log("se hace algo");
    console.log(fn(a, b));
}

operation(sum, 10, 20); // funcion de orden superior.


// arrow function

operation((a, b) => a * b, 5, 5);
operation((a, b) => {
    const c = a + b;
    return c * 2;
}, 5, 5);

// foreach

const names = ["juan", "pedro", "maria", "ana"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));
names.sort();
console.log(names);

// map
console.log("map");
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);

// reduce 
console.log("reduce");
const numbers = [5, 4, 7, 1, 10];
const total = numbers.reduceRight((ac, number) => {
    return ac + (number * 2);
}, 0);

console.log(total)


// Prgramación Orientada a Objetos
// clase

class Drink {
    constructor(name) {
        this.name = name;
    }
    info() {
        return `la bebida es ${this.name}`;
    }
}

//funcional 

function Drink2(name) {
    this.name = name;
    this.info = function () {
        return `la bebida es ${this.name}`;
    }
}

const drink = new Drink("Coca Cola");
console.log(drink.info())

const drink2 = new Drink2("Agua");
console.log(drink2.info())


// herencia 

class Beer extends Drink {
    constructor(name, alcohol) {
        super(name);
        this.alcohol = alcohol;
    }
    info() {
        return super.info() + " " + this.alcohol
    }
}


const beer = new Beer("Heineken", 4);
console.log(beer.info());

