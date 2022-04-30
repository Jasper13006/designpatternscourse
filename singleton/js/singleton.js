class Singleton {
    static getInstance() {
        return Singleton.instance;
    }
    constructor() {
        this.random = Math.random();
        if (Singleton.instance) {
            console.log("ya existe una instancia");
            return Singleton.instance
        }
        console.log("creando una instancia");
        Singleton.instance = this
    }
}

const singleton = new Singleton();
console.log(singleton.random);
const singleton2 = new Singleton();
console.log(singleton2.random);
console.log(singleton === singleton2);
console.log(Singleton.getInstance());