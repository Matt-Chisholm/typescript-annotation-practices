import 'reflect-metadata';

const plane = {
    color: 'red';

    @markFunction
    fly(): void {
        console.log('swoosh');
    }
};

function markFunction(target: PlaybackDirection, key: string) {
    Reflect.defineMetadata('secret', 123, target, key);
}