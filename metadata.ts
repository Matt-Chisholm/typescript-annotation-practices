import 'reflect-metadata';

const plane = {
    color: 'red'
};

Reflect.defineMetadata('note', 'hello!', plane, 'color');

console.log(Reflect.getMetadata('note', plane, 'color'));