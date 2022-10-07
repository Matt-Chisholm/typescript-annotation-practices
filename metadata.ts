import 'reflect-metadata';

const plane = {
    color: 'red'
};

Reflect.defineMetadata('note', 'hello!', plane);

console.log(Reflect.getMetadata('note', plane));