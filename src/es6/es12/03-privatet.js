//declarando
class user {

};
//instancia de una clase
//const newuser = new user();


class user {
//metodos
greeting(){
    return 'Hello';
}
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor
class user {
    //constructor 
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();


//this
class user{
    constructor(name){
        this.name=name;
    }
    //metodo
    speak(){
        return'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user ('Ana');

console.log(ana.greeting());

//setters getters


class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //methods
    #speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age=n;
    }
}
const bebelopers = new user ('david',15);
console.log(bebelopers.uAge);
console.log(bebelopers.uAge=20);