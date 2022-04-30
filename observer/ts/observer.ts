/**
 * Observer con typscript
 * primero toca crear las interfaces.
 */


interface IObserver<T> {
    refresh(value: T): void;
}

interface ISubject<T> {

    observers: IObserver<T>[];

    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}

class Subject<T> implements ISubject<T>{
    observers: IObserver<T>[];

    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(value: T): void {
        this.observers.forEach(o => o.refresh(value));
    }
}

class Observer<T> implements IObserver<T> {
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}


const subject = new Subject<number>();
const obs1 = new Observer<number>((n) => {
    console.log(`observer 1: ${n}`);
})
const obs2 = new Observer<number>((n) => {
    console.log(`observer 2: ${n}`);
})
subject.subscribe(obs1);
subject.subscribe(obs2);

subject.notify(1.2);

const subjectString = new Subject<string>();
const obsString1 = new Observer<string>(s => {
    console.log(`observer string 1: ${s}`);
})
const obsString2 = new Observer<string>(s => {
    console.log(`observer string 2: ${s}`);
})
subjectString.subscribe(obsString1);
subjectString.subscribe(obsString2);

subjectString.notify("hola");