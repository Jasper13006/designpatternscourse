/**
 * Gracias a las interfaces podemos crear contratos entre las clases.
 *
 */

interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {
    private strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("nos dirigimos a la base de datos");
        if (user === "admin" && password === "entra") {
            return true;
        }
        return user === password;
    }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("nos dirigimos a un webservice");
        if (user === "admin" && password === "entra") {
            return true;
        }
        return user === password;
    }
}


class LoginGoogleStrategy implements Strategy {
    login(user: string, password: string): boolean {
        console.log("nos dirigimos a Google");
        if (user === "admin" && password === "entra") {
            return true;
        }
        return user === password;
    }
}


const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login("entras", "entras"));
auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login("entras", "entras"));
auth.setStrategy(new LoginGoogleStrategy());
console.log(auth.login("entras", "entras"));