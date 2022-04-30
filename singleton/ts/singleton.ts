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