import 'reflect-metadata';

class Plane {
    color: string = 'red';

    @markFunction('HELLO!')
    fly(): void {
        console.log('swoosh');
    }
};

function markFunction(secretInfo: string) {
    return function(target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    }
}