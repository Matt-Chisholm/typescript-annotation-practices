interface Reportable {
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

const drink = {
    color: 'green',
    carbonated: true,
    sugar: 60,
    summary(): string {
        return `${this.color} drink Carbonated: ${this.carbonated} and ${this.sugar}g of sugar`
    }
};

const printSummary = (item: Reportable ): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);