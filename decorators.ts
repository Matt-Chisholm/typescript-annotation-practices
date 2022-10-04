class Boat {
    color: string = 'red';

    get formattedColor(): string {
        return `This boat's color is ${this.color}`;
    }

    @logError
    pilot(): void {
        throw new Error();
        console.log('swoosh');
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    console.log('Target:', target);
    console.log('Key:', key);
}