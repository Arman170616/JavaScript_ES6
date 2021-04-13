class Vehicle {
    constructor(param1, param2) {
        this.color = param1;
        this.passenger = param2;

    }


}

class Car extends Vehicle {
    constructor(numWheel, pass, color) {
        super(color, pass);
        this.wheel = numWheel;
    }
}



let obj1 = new Car(4, 6, 'white');

console.log(obj1);

