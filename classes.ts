class Vehicle {
    color: string = 'red';

    constructor(color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log('Honk')
    }
};

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
    private drive(): void {
        console.log('Vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
};


