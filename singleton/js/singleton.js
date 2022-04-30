/**
 * Los patrones de diseño pueden ser creacionales, estructurales, de comportamiento.
 * Singleton es un patrón creacional, porque nos esta dando una técnica para crear objetos.
 * Podemos utilizarlo cuando la persistencia de la info de nuestro objeto no va a cambiar.
 */
// class Singleton {
//     static getInstance() {
//         return Singleton.instance;
//     }
//     constructor() {
//         this.random = Math.random();
//         if (Singleton.instance) {
//             console.log("ya existe una instancia");
//             return Singleton.instance
//         }
//         console.log("creando una instancia");
//         Singleton.instance = this
//     }
// }

// const singleton = new Singleton();
// console.log(singleton.random);
// const singleton2 = new Singleton();
// console.log(singleton2.random);
// console.log(singleton === singleton2);
// console.log(Singleton.getInstance());

class WeekDays {
    daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    constructor(lang) {
        this.lang = lang;
        if (WeekDays.instance) {
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }
}

const weekDays = new WeekDays("es");
const weekDays2 = new WeekDays("en");
console.log(weekDays.getDays());
console.log(weekDays2.getDays());