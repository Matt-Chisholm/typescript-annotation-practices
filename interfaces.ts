interface Vehicle {
    summary(): string;
};

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const printVehicle = (vehicle: Vehicle ): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);