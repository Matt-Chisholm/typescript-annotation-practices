import 'reflect-metadata';

class Plane {
    color: string = 'red';

    @markFunction
    fly(): void {
        console.log('swoosh');
    }
};

function markFunction(target: Plane, key: string) {
    Reflect.defineMetadata('secret', 123, target, key);
}
