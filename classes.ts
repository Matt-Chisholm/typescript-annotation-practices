class Vehicle {

    constructor(public color: string) {
    }

    protected honk(): void {
        console.log('Honk')
    }
};

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }

    private drive(): void {
        console.log('Vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
};

const car = new Car('blue');
car.startDrivingProcess();


