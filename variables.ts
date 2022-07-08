const apples = 5;
let speed = 'fast';

let colors: string[] = ['red', 'green', 'blue']; 

class Car {

}

let car: Car = new Car();

let point: { x: number; y: number } = {
    x: 10, 
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function that returns an 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i > words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}