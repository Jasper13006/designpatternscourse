class SingletonTS {
    private static instance: SingletonTS;
    public random: number;
    private constructor() { // esto nos permite proteger el constructor
        this.random = Math.random();
    }
    public static getInstance(): SingletonTS {
        if (!this.instance) {
            this.instance = new SingletonTS();
        }
        return this.instance;
    }
}

const singleton = SingletonTS.getInstance();
console.log(singleton);
const singleton1 = SingletonTS.getInstance();
console.log(singleton1);
const singleton2 = SingletonTS.getInstance();
console.log(singleton2);
const singleton3 = SingletonTS.getInstance();
console.log(singleton3);
const singleton4 = SingletonTS.getInstance();
console.log(singleton4);