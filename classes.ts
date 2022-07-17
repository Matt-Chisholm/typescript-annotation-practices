class Vehicle {
    protected honk(): void {
        console.log('Honk')
    }
};

class Car extends Vehicle {
    private drive(): void {
        console.log('Vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
};

const car = new Car;

car.startDrivingProcess();
